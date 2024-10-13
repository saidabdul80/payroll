<?php

namespace App\Http\Controllers;

use App\Enums\TransactionStatus;
use App\Models\Payment;
use App\Models\PaymentSettlement;
use App\Models\Settlement;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Unicodeveloper\Paystack\Facades\Paystack;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
    
    }

    public function show(Request $request, $id)
    {
        
    }

    public function store(Request $request)
    {
       
    }

    public function update(Request $request, $id)
    {
     
    }

   

    public function redirectToGateway(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'amount' => 'required',
            'gateway' => 'nullable|string',
        ]);
        $user = $request->user();
    
        return $this->beginPaymentProcess($request->amount, $request->gateway??'paystack', $user);
    }

  
    public function beginPaymentProcess($amount, $gateway, $user)
    {
    
       
        // Prepare payment data
        $paymentData = [
            'reference' => Paystack::genTranxRef(),
            'date' => now()->toDateString(),
            'amount' => $amount,
            'charges' => 0,
            'channel' => '-',
            'status' => TransactionStatus::PENDING,
            'gateway' => $gateway,
            'owner_type' => get_class($user),
            'owner_id' => $user->id
        ];

        $payment = Payment::create($paymentData);
        $response = $this->handleGateway($payment, $amount, $user->email, 'NGN', $user->phone_number, $user->id, $user->name);
        return response()->json($response);

    }

    private function handleGateway($payment,  $amount, $email, $currency, $phone_number, $order_id, $full_name)
    {
        switch ($payment->gateway) {
            case 'paystack':
                return $this->handlePaystackGateway($payment, $amount, $email, $currency, $phone_number, $order_id, $full_name);
            case 'wallet':
                return $this->handleWalletGateWay($payment, $amount);
            default:
                return ['errors' => ['gateway' => 'Unsupported payment gateway']];
        }
    }

    private function handlePaystackGateway($payment, $amount, $email, $currency, $phone_number, $order_id, $full_name, $callback = null, $type = 'normal')
    {

        $data = [
            'amount' => ceil($amount * 100),
            'reference' => $payment->reference,
            'email' => !empty($email) ? $email : 'info@irs.gm.gov.ng',
            'first_name' => $full_name ?? '',
            'phone' => $phone_number ?? '',
            'currency' => $currency ?? 'NGN',
            'metadata' => [
                'type' => $type,
                'order_id' => $order_id,
            ]
        ];
        // if(!is_null($callback)){
        //     $data['callback_url'] = $callback;
        //     abort(422, $callback);
        // }

        return Paystack::getAuthorizationUrl($data)->url;
    }

    public function handleWebhook(Request $request)
    {
        $gateway = $request->gateway;
        if ($gateway === 'paystack') {
            $this->paystackwebhook($request);
        } else {
            Log::warning("Unhandled gateway: " . $gateway);
        }

        return response()->json(['message' => 'Webhook received'], 200);
    }

    private function paystackwebhook($request)
    {
        $secretKey = config('paystack.secretKey');

        $signature = $request->header('x-paystack-signature');
        $computedSignature = hash_hmac('sha512', $request->getContent(), $secretKey);

        if ($signature !== $computedSignature) {
            Log::warning('Invalid Paystack webhook signature.');
            return response()->json(['message' => 'Invalid signature'], 400);
        }

        $event = $request->input('event');
        $data = $request->input('data');
        Log::info('paystack webhook:' . $data);
        switch ($event) {
            case 'transfer.success':
                $this->handleTransferSuccess($data);
                break;

            case 'transfer.failed':
                $this->handleTransferFailure($data);
                break;
            case 'paymentrequest.success':

                //$payment = $this->handlePaystackCallback($data);
                break;
            default:
                Log::info('Unhandled Paystack event: ' . $event);
                break;
        }
    }

    protected function handleTransferSuccess($data)
    {
        $reference = $data['reference'];
        $settlement = Settlement::where('reference', $reference)->first();

        if (!$settlement) {
            Log::warning('Settlement not found for reference: ' . $reference);
            return;
        }

        $settlement->update(['status' => TransactionStatus::SUCCESSFUL]);
        PaymentSettlement::where('token', $reference)->update(['status' => TransactionStatus::SUCCESSFUL]);
        Log::info('Transfer successful and records updated for reference: ' . $reference);
    }

    protected function handleTransferFailure($data)
    {
        $reference = $data['reference'];
        $settlement = Settlement::where('reference', $reference)->first();

        if (!$settlement) {
            Log::warning('Settlement not found for reference: ' . $reference);
            return;
        }

        $settlement->update(['status' => TransactionStatus::FAILED]);
        PaymentSettlement::where('token', $reference)->update(['status' => TransactionStatus::FAILED]);
        Log::error('Transfer failed for reference: ' . $reference);
    }

    public function handleGatewayCallback(Request $request)
    {
        try {

            $gateway = $request->gateway;
            $reference = $request->reference;
            $payment = collect([]);
            
            if ($gateway === 'paystack') {
                $payment = $this->handlePaystackCallback($reference);
            } else {
                Log::warning("Unhandled gateway: " . $gateway);
            }

            return view('close');
        } catch (\Exception $e) {
            return response()->json(["error" => $e->getMessage()], 400);
        }
    }

    private function updatePaymentRecords($reference, $amount, $channel, $charges =0)
    {
        // Begin a database transaction
        DB::beginTransaction();

        try {
            
            $payment = Payment::where('reference', $reference)->first();
            if (!$payment) {
                Log::error("Payment with reference " . $reference . " not found.");
                throw new \Exception('Payment not found', 404);
            }

            if ($payment->status == TransactionStatus::SUCCESSFUL) {
                throw new \Exception('Payment has already been completed', 422);
            }
        
           
            self::processPaymentCompletion($payment, $payment->amount);

            DB::commit();
            return Payment::with('taxInvoices.taxable')->where('reference', $reference)->first();
        } catch (\Exception $e) {
            // Rollback the transaction in case of an error
            DB::rollBack();
            Log::error("Error updating payment records: " . $e->getMessage());
            throw $e;
        }
    }

    static public function processPaymentCompletion($payment, $totalPaid) {    

        $payment->update([
            'paid_amount' => $totalPaid,
            'paid_time' => Carbon::now()->format('H:i:s')
        ]);
        
       // PaymentShare::insert($shareRecord);
    }
    private function handlePaystackCallback($reference)
    {
        // $paystack = new PaystackPaystack;
        // $verified = $paystack->isTransactionVerificationValid($reference);
        $response = Http::withHeaders(['Authorization' => 'Bearer ' . config('paystack.secretKey')])
            ->get('https://api.paystack.co/transaction/verify/' . $reference);
     
        if ($response->successful()) { 
            $paymentData = json_decode($response->body(), true);
            if($paymentData['data']['status']== "success"){
                $amount  = ($paymentData["data"]["amount"] / 100);
                $charges = ( $paymentData["data"]["fees"] / 100);
                $payment = $this->updatePaymentRecords($reference, $amount, $paymentData["data"]["channel"], $charges);
                return $payment;
            }else if($paymentData['data']['status']== "abandoned"){
                abort(422,'Payment has not been made');
            }
        }else{
            $payment = Payment::where('reference', $reference)->first();
            if($payment){
                $payment->update(['status' => TransactionStatus::FAILED]);
                abort(422, 'Verification failed for reference');
            }
        }

        // Log::error("Verification failed for reference " . $reference);
        // $payment = (object)[];
 
        // return $payment;
    }


    public function requery($reference)
    {
        $reference = $reference;
        $payment = Payment::where('reference', $reference)->first();

        switch ($payment->gateway) {
            case 'paystack':
                $this->handlePaystackCallback($payment->reference);
                break;
            default:
                # code...
                break;
        }
    }
}
