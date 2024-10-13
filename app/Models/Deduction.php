<?php

namespace App\Models;

use App\Enums\DeductionType;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Deduction extends Model
{
    use HasFactory, LogsActivity;
    protected $guarded = [];

    protected $fillable = [
        "payroll_id",
        "deduction",
        "type",
        "amount",
    ];

    protected function deduction(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return DeductionType::getKey($value);
            },
            set: function ($value) {
               return DeductionType::getValue($value);
            }
        );
    }

    // public function getFinalAmountAttribute(){
    //     if($this->type =='flat'){
    //         return $this->amount;
    //     }
    // }


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['name', 'text']);
    }

    public function getSum()
    {
        return 0;
    }

    
    public function payroll(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Payroll::class);
    }

}
