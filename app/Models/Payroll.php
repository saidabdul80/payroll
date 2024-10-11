<?php

namespace App\Models;

use App\Traits\Tax;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Payroll extends Model
{
    use HasFactory, LogsActivity, Tax;
    protected $guarded = [];
    protected $with =['employee','additions',
    'deductions'];
    protected $appends = ['tax_amount'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults();
    }

    public function employee(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function additions(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Addition::class);
    }
    public function deductions(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Deduction::class);
    }

    public function getTaxAmountAttribute(){
        $taxableIncome = ($this->base + $this->additions->getSum()) - $this->deductions->getSum();
        return self::getTaxAmount((float) $taxableIncome);
    }


    // protected function totalPayable(): Attribute
    // {
    //     return Attribute::make(
    //         get: function ($value) {
    //             // Assuming these methods exist and return the correct values
    //             if(empty($employee)){
    //                 return 0;
    //             }
    //             $salary = $this->employee->salaries()->where('end_date', null)->first();
    //             $salary = 0;
    //             if(!empty($salary->salary) ){
    //                 $salary = $salary?->salary;
    //             }
              
    //             $additions = $this->additions->getSum(); // Adjust if different method is used to get the sum
    //             $deductions = $this->deductions->getSum(); // Adjust if different method is used to get the sum

    //             $taxableIncome = ($salary + $additions) - $deductions;
    //             $taxAmount = self::getTaxAmount((float) $taxableIncome);

    //             return $salary - $taxAmount;
    //         },
    //     );
    // }


    public function evaluations(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(EmployeeEvaluation::class);
    }

//    protected function status(): Attribute
//    {
//        return Attribute::make(
//            get: fn (bool $value) => match ($value) {
//                true => 'Paid',
//                false => 'Pending',
//            },
//        );
//    }

}
