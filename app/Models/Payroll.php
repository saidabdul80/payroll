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
    protected $with =['employee','additions', 'deductions'];
    protected $appends = ['tax_amount'];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults();
    }

    public function employee(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function additions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Addition::class);
    }
    public function deductions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Deduction::class);
    }

    public function calculateTotalAdditions()
    {
        return $this->additions->reduce(function ($carry, $addition) {
            if ($addition->type === 'flat') {
                $addition->total = $addition->amount;
            } else {
                $addition->total = ($addition->amount / 100) * $this->payroll->base; // Ensure payroll is accessible
            }
            
            return $carry + $addition->total; // Accumulate the total
        }, 0); // Initialize accumulator to 0
    }

    public function calculateTotalDeductions()
    {
        return $this->deductions->reduce(function ($carry, $deduction) {
            if ($deduction->type === 'flat') {
                $deduction->total = $deduction->amount;
            } else {
                $deduction->total = ($deduction->amount / 100) * $this->payroll->base; // Ensure payroll is accessible
            }
            
            return $carry + $deduction->total; // Accumulate the total
        }, 0); // Initialize accumulator to 0
    }

    
    public function getTaxAmountAttribute()
    {
        // Calculate total additions using the defined method
        $totalAdditions = $this->calculateTotalAdditions();
    
        // Calculate total deductions using the defined method
        $totalDeductions = $this->calculateTotalDeductions();
    
        // Compute taxable income
        $taxableIncome = ($this->base + $totalAdditions) - $totalDeductions;
    
        // Return the calculated tax amount
        return self::getTaxAmount((float) $taxableIncome);
    }
    


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
