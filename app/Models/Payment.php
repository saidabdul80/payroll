<?php
namespace App\Models;

use App\Casts\ArrayCast;
use Carbon\Carbon;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use Filterable;
    protected $fillable = [
        'reference', 'date', 'amount', 'status', 'channel', 'gateway', 'owner_type','owner_id','redirect','paid_amount','paid_time'
        //tax_invoice_id
    ];
   
    
    protected $appends = ['time', 'tax_invoice'];
  

    public function getTimeAttribute(){
        return Carbon::parse($this->created_at)->format('h:i A');
    }

    public function owner()
    {
        return $this->morphTo();
    }

    
}
