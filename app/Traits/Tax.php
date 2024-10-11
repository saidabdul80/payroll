<?php

namespace App\Traits;

use App\Models\Cra;
use App\Models\Globals;
use App\Models\TaxBracket;
use App\Services\Util;

trait Tax {

    static public function getTaxAmount($salary)
    {
        // Get CRA (Consolidated Relief Allowance)
        $global = Globals::first();
        if($salary <= (float) $global->minimum_wage_in_value){
            return (((float) $global->{'minimum_tax_determination_in_%'}/100) * ($salary*12))/12;
        }
        $cra = Cra::first();        
        $taxBrackets = TaxBracket::all();

        $grossSalary =  $salary * 12;
        // Calculate CRA components
        $fixedCra = max($cra->fixed_amount, $grossSalary * ($cra->minimum_percentage / 100));
        $additionalCra = $grossSalary * ($cra->additional_percentage / 100);
        $totalCra = $fixedCra + $additionalCra;

        // Calculate taxable income
        $taxableIncome = $grossSalary - $totalCra;

        if ($taxableIncome <= 0) {
            return (((float) $global->{'minimum_tax_determination_in_%'}/100) * ($salary*12))/12;
        }

        
        $taxAmount = 0;
        foreach ($taxBrackets as $bracket) {
            if ($taxableIncome <= 0) {
                break;
            }
            $amountInBracket = min($bracket->amount, $taxableIncome);
            $taxAmount += $amountInBracket * ($bracket->percentage / 100);
            $taxableIncome -= $amountInBracket;
        }

        return round($taxAmount / 12,2); // Return monthly tax amount
    }
}