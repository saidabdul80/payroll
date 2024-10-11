<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cra;

class CraSeeder extends Seeder
{
    public function run()
    {
        // Seed CRA (Consolidated Relief Allowance) data
        Cra::create([
            'fixed_amount' => 200000,
            'minimum_percentage' => 1,
            'additional_percentage' => 20,
        ]);
    }
}
