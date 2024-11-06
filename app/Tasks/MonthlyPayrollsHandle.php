<?php
namespace App\Tasks;

use App\Enums\AdditionType;
use App\Enums\DeductionType;
use App\Models\Addition;
use App\Models\Deduction;
use App\Models\Employee;
use App\Models\Payroll;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class MonthlyPayrollsHandle
{
    public function __invoke(?string $date = null): void
    {
     //   logger("Monthly Maintenance is running");
    //    Artisan::call('down --retry=1 --secret=HelloKittyImNotSoPretty --render=\"errors::503_monthly\"');

        // Use the passed date or default to the current date
        try{
                DB::beginTransaction();
            $date = $date ? Carbon::parse($date)->toDateString() : Carbon::now()->toDateString();

            // Get all employees and their most recent payroll due date
            $employees = Employee::all();
            $employeeIds = $employees->pluck('id');
            $previousPayrolls = Payroll::whereIn('employee_id', $employeeIds)
                ->select('employee_id', DB::raw('MAX(due_date) as due_date'))
                ->groupBy('employee_id')
                ->get()
                ->keyBy('employee_id');

            // Prepare data for bulk insert
            $payrollsData = [];
            $additionsData = [];
            $deductionsData = [];

            foreach ($employees as $employee) {
                $payrollsData[] = [
                    'employee_id' => $employee->id,
                    'currency' => 'NGN',
                    'base' => $employee->salary()[1],
                    'total_payable' => $employee->salary()[1],
                    'performance_multiplier' => 1,
                    'due_date' => $date,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];

                $previousDueDate = $previousPayrolls[$employee->id]->due_date ?? null;

                if ($previousDueDate) {
                    $previousPayrollId = Payroll::where('employee_id', $employee->id)
                                                ->where('due_date', $previousDueDate)
                                                ->value('id');

                    // Fetch previous additions and deductions for this employee
                    $previousAdditions = Addition::where('payroll_id', $previousPayrollId)->get();
                    $previousDeductions = Deduction::where('payroll_id', $previousPayrollId)->get();

                    // Replicate additions
                    foreach ($previousAdditions as $addition) {
                        $additionsData[] = [
                            'payroll_id' => $employee->id, // This will be updated after payroll insertion
                            'amount' => $addition->amount,
                            'addition' =>  AdditionType::getKey($addition->addition),
                            "type"=> $addition->type,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }

                    // Replicate deductions
                    foreach ($previousDeductions as $deduction) {
                        $deductionsData[] = [
                            'payroll_id' => $employee->id, // This will be updated after payroll insertion
                            'amount' => $deduction->amount,
                            'deduction' => DeductionType::getKey($deduction->deduction),
                            "type"=> $addition->type,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }
                }else{
                    foreach (DeductionType::toArray() as $deduction => $value) {

                        $deductionsData[] = [
                            'payroll_id' => $employee->id, // This will be updated after payroll insertion
                            'amount' => 0,
                            'deduction' => $value,
                            "type"=> 'flat',
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }

                    foreach (AdditionType::toArray() as $addition => $value) {
                        $additionsData[] = [
                            'payroll_id' => $employee->id, // This will be updated after payroll insertion
                            'amount' => 0,
                            'deduction' => $value,
                            "type"=> 'flat',
                            'created_at' => now(),
                            'updated_at' => now(),
                        ];
                    }
                }
            }

            // Bulk upsert payrolls
            Payroll::upsert($payrollsData, ['employee_id', 'due_date'], ['currency', 'base', 'total_payable', 'performance_multiplier', 'updated_at']);

            // Retrieve the upserted payrolls to get their IDs and update payroll_id in additions and deductions data
            $insertedPayrolls = Payroll::whereIn('employee_id', $employeeIds)
                                        ->where('due_date', $date)
                                        ->get()
                                        ->keyBy('employee_id');

            foreach ($additionsData as &$addition) {
                $addition['payroll_id'] = $insertedPayrolls[$addition['payroll_id']]->id;
            }
            foreach ($deductionsData as &$deduction) {
                $deduction['payroll_id'] = $insertedPayrolls[$deduction['payroll_id']]->id;
            }

            // Bulk upsert additions and deductions
            Addition::upsert($additionsData, ['payroll_id', 'addition'], ['amount', 'type', 'updated_at']);
            Deduction::upsert($deductionsData, ['payroll_id', 'deduction'], ['amount', 'type', 'updated_at']);
            DB::commit();
        }catch(\Exception $e){
            DB::rollBack();
            throw new \Exception($e->getMessage());
        }   
        //Artisan::call('up');
        logger("Monthly Maintenance Completed");
    }
}


// namespace App\Tasks;

// use App\Enums\AdditionType;
// use App\Enums\DeductionType;
// use App\Models\Addition;
// use App\Models\Deduction;
// use App\Models\Employee;
// use App\Models\Payroll;
// use Carbon\Carbon;
// use Illuminate\Support\Facades\Artisan;

// class MonthlyPayrollsHandle
// {
//     public function __invoke(): void
//     {
//         logger("Monthly Maintenance is running");
//         Artisan::call('down --retry=1 --secret=HelloKittyImNotSoPretty --render="errors::503_monthly"');

//         // Generate Payrolls
//         $date = Carbon::now()->toDateString();
//         $employeesCount = Employee::count();

//         for ($i = 1; $i <= $employeesCount; $i++) {
//             $employee = Employee::find($i);

//             $payroll = Payroll::create([
//                 'employee_id' => $employee->id,
//                 'currency' =>'NGN',
//                 'base' => $employee->salary()[1],
//                 'total_payable' => $employee->salary()[1],
//                 'performance_multiplier' => 1,
//                 "due_date" => $date,
//             ]);
//             // $additions = AdditionType::toArray();
//             // $deductions = DeductionType::toArray();
//             Addition::create([
//                 'payroll_id' => $payroll->id,
//                 "due_date" => $date,
//             ]);

//             Deduction::create([
//                 'payroll_id' => $payroll->id,
//                 "due_date" => $date,
//             ]);
//         }

//         Artisan::call('up');
//         logger("MonthlyMaintenance Completed");
//     }
// }
