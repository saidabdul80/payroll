<?php

namespace App\Models;

use App\Traits\Tax;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\LogOptions;

class EmployeeSalary extends Model
{
    use LogsActivity, Tax;

    protected $guarded = [];

    protected  $appends = [
        'tax_amount'
    ];
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults();
    }


    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    protected function salary(): Attribute
    {
        return Attribute::make(
            get:function($value, $model){
                if(!empty($this->salary_structure_id)){
                    $salary = SalaryStructure::find($this->salary_structure_id);
                    return $salary->salary;
                }
            },
        );
    }

    public function getTaxAmountAttribute(){
        if(!empty($this->salary_structure_id)){
            $salary = SalaryStructure::find($this->salary_structure_id);
            return self::getTaxAmount((float) $salary->salary);
        }
        return 0;
    }

    // This function should be in a helper, not in this model because it might be used somewhere else.
    function getCurrencySymbol()
    {
        $currencySymbols = [
            'NGN' => '₦',
            // 'USD' => '$',
            // 'EUR' => '€',
            // 'GBP' => '£',
            // 'CAD' => '$',
            // 'KWD' => 'د.ك',
            // 'SAR' => '﷼',
            // 'AED' => 'د.إ'
        ];

        return $currencySymbols[$this->currency] ?? '';
        //return $currencySymbols[$this->currency] ?? '';
    }
}
