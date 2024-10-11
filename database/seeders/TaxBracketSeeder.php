<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TaxBracket;

class TaxBracketSeeder extends Seeder
{
    public function run()
    {
        // Seed tax brackets data
        TaxBracket::create([
            'name' => 'First',
            'amount' => 300000,
            'percentage' => 7,
        ]);

        TaxBracket::create([
            'name' => 'Next',
            'amount' => 300000,
            'percentage' => 11,
        ]);

        TaxBracket::create([
            'name' => 'Next',
            'amount' => 500000,
            'percentage' => 15,
        ]);

        TaxBracket::create([
            'name' => 'Next',
            'amount' => 500000,
            'percentage' => 19,
        ]);

        TaxBracket::create([
            'name' => 'Next',
            'amount' => 1600000,
            'percentage' => 21,
        ]);

        TaxBracket::create([
            'name' => 'Above',
            'amount' => 3200000,
            'percentage' => 24,
        ]);
    }
}
