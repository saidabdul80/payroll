<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalaryStructureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $salaries = [
            ['scheme' => 'GL 01', 'level' => '1', 'step' => '1', 'salary' => '226800'],
            ['scheme' => 'GL 01', 'level' => '1', 'step' => '2', 'salary' => '231800'],
            ['scheme' => 'GL 01', 'level' => '1', 'step' => '3', 'salary' => '236800'],
            ['scheme' => 'GL 01', 'level' => '1', 'step' => '4', 'salary' => '241800'],
            ['scheme' => 'GL 01', 'level' => '1', 'step' => '5', 'salary' => '246800'],
            ['scheme' => 'GL 02', 'level' => '2', 'step' => '1', 'salary' => '237100'],
            ['scheme' => 'GL 02', 'level' => '2', 'step' => '2', 'salary' => '242100'],
            ['scheme' => 'GL 02', 'level' => '2', 'step' => '3', 'salary' => '247100'],
            ['scheme' => 'GL 02', 'level' => '2', 'step' => '4', 'salary' => '252100'],
            ['scheme' => 'GL 02', 'level' => '2', 'step' => '5', 'salary' => '257100'],
            ['scheme' => 'GL 03', 'level' => '3', 'step' => '1', 'salary' => '267800'],
            ['scheme' => 'GL 03', 'level' => '3', 'step' => '2', 'salary' => '273800'],
            ['scheme' => 'GL 03', 'level' => '3', 'step' => '3', 'salary' => '279800'],
            ['scheme' => 'GL 03', 'level' => '3', 'step' => '4', 'salary' => '285800'],
            ['scheme' => 'GL 03', 'level' => '3', 'step' => '5', 'salary' => '291800'],
            ['scheme' => 'GL 04', 'level' => '4', 'step' => '1', 'salary' => '290000'],
            ['scheme' => 'GL 04', 'level' => '4', 'step' => '2', 'salary' => '296000'],
            ['scheme' => 'GL 04', 'level' => '4', 'step' => '3', 'salary' => '302000'],
            ['scheme' => 'GL 04', 'level' => '4', 'step' => '4', 'salary' => '308000'],
            ['scheme' => 'GL 04', 'level' => '4', 'step' => '5', 'salary' => '314000'],
            ['scheme' => 'GL 05', 'level' => '5', 'step' => '1', 'salary' => '312000'],
            ['scheme' => 'GL 05', 'level' => '5', 'step' => '2', 'salary' => '319000'],
            ['scheme' => 'GL 05', 'level' => '5', 'step' => '3', 'salary' => '326000'],
            ['scheme' => 'GL 05', 'level' => '5', 'step' => '4', 'salary' => '333000'],
            ['scheme' => 'GL 05', 'level' => '5', 'step' => '5', 'salary' => '340000'],
            ['scheme' => 'GL 06', 'level' => '6', 'step' => '1', 'salary' => '419300'],
            ['scheme' => 'GL 06', 'level' => '6', 'step' => '2', 'salary' => '427800'],
            ['scheme' => 'GL 06', 'level' => '6', 'step' => '3', 'salary' => '436300'],
            ['scheme' => 'GL 06', 'level' => '6', 'step' => '4', 'salary' => '444800'],
            ['scheme' => 'GL 06', 'level' => '6', 'step' => '5', 'salary' => '453300'],
            ['scheme' => 'GL 07', 'level' => '7', 'step' => '1', 'salary' => '550500'],
            ['scheme' => 'GL 07', 'level' => '7', 'step' => '2', 'salary' => '560500'],
            ['scheme' => 'GL 07', 'level' => '7', 'step' => '3', 'salary' => '570500'],
            ['scheme' => 'GL 07', 'level' => '7', 'step' => '4', 'salary' => '580500'],
            ['scheme' => 'GL 07', 'level' => '7', 'step' => '5', 'salary' => '590500'],
            ['scheme' => 'GL 08', 'level' => '8', 'step' => '1', 'salary' => '660800'],
            ['scheme' => 'GL 08', 'level' => '8', 'step' => '2', 'salary' => '671800'],
            ['scheme' => 'GL 08', 'level' => '8', 'step' => '3', 'salary' => '682800'],
            ['scheme' => 'GL 08', 'level' => '8', 'step' => '4', 'salary' => '693800'],
            ['scheme' => 'GL 08', 'level' => '8', 'step' => '5', 'salary' => '704800'],
            ['scheme' => 'GL 09', 'level' => '9', 'step' => '1', 'salary' => '780000'],
            ['scheme' => 'GL 09', 'level' => '9', 'step' => '2', 'salary' => '792500'],
            ['scheme' => 'GL 09', 'level' => '9', 'step' => '3', 'salary' => '805000'],
            ['scheme' => 'GL 09', 'level' => '9', 'step' => '4', 'salary' => '817500'],
            ['scheme' => 'GL 09', 'level' => '9', 'step' => '5', 'salary' => '830000'],
            ['scheme' => 'GL 10', 'level' => '10', 'step' => '1', 'salary' => '900000'],
            ['scheme' => 'GL 10', 'level' => '10', 'step' => '2', 'salary' => '913500'],
            ['scheme' => 'GL 10', 'level' => '10', 'step' => '3', 'salary' => '927000'],
            ['scheme' => 'GL 10', 'level' => '10', 'step' => '4', 'salary' => '940500'],
            ['scheme' => 'GL 10', 'level' => '10', 'step' => '5', 'salary' => '954000'],
            ['scheme' => 'GL 12', 'level' => '12', 'step' => '1', 'salary' => '1000000'],
            ['scheme' => 'GL 12', 'level' => '12', 'step' => '2', 'salary' => '1020000'],
            ['scheme' => 'GL 12', 'level' => '12', 'step' => '3', 'salary' => '1040000'],
            ['scheme' => 'GL 12', 'level' => '12', 'step' => '4', 'salary' => '1060000'],
            ['scheme' => 'GL 12', 'level' => '12', 'step' => '5', 'salary' => '1080000'],
            ['scheme' => 'GL 13', 'level' => '13', 'step' => '1', 'salary' => '1200000'],
            ['scheme' => 'GL 13', 'level' => '13', 'step' => '2', 'salary' => '1225000'],
            ['scheme' => 'GL 13', 'level' => '13', 'step' => '3', 'salary' => '1250000'],
            ['scheme' => 'GL 13', 'level' => '13', 'step' => '4', 'salary' => '1275000'],
            ['scheme' => 'GL 13', 'level' => '13', 'step' => '5', 'salary' => '1300000'],
            ['scheme' => 'GL 14', 'level' => '14', 'step' => '1', 'salary' => '1400000'],
            ['scheme' => 'GL 14', 'level' => '14', 'step' => '2', 'salary' => '1425000'],
            ['scheme' => 'GL 14', 'level' => '14', 'step' => '3', 'salary' => '1450000'],
            ['scheme' => 'GL 14', 'level' => '14', 'step' => '4', 'salary' => '1475000'],
            ['scheme' => 'GL 14', 'level' => '14', 'step' => '5', 'salary' => '1500000'],
            ['scheme' => 'GL 15', 'level' => '15', 'step' => '1', 'salary' => '1500000'],
            ['scheme' => 'GL 15', 'level' => '15', 'step' => '2', 'salary' => '1525000'],
            ['scheme' => 'GL 15', 'level' => '15', 'step' => '3', 'salary' => '1550000'],
            ['scheme' => 'GL 15', 'level' => '15', 'step' => '4', 'salary' => '1575000'],
            ['scheme' => 'GL 15', 'level' => '15', 'step' => '5', 'salary' => '1600000'],
            ['scheme' => 'GL 16', 'level' => '16', 'step' => '1', 'salary' => '1700000'],
            ['scheme' => 'GL 16', 'level' => '16', 'step' => '2', 'salary' => '1730000'],
            ['scheme' => 'GL 16', 'level' => '16', 'step' => '3', 'salary' => '1760000'],
            ['scheme' => 'GL 16', 'level' => '16', 'step' => '4', 'salary' => '1790000'],
            ['scheme' => 'GL 16', 'level' => '16', 'step' => '5', 'salary' => '1820000'],
            ['scheme' => 'GL 17', 'level' => '17', 'step' => '1', 'salary' => '2000000'],
            ['scheme' => 'GL 17', 'level' => '17', 'step' => '2', 'salary' => '2035000'],
            ['scheme' => 'GL 17', 'level' => '17', 'step' => '3', 'salary' => '2070000'],
            ['scheme' => 'GL 17', 'level' => '17', 'step' => '4', 'salary' => '2105000'],
            ['scheme' => 'GL 17', 'level' => '17', 'step' => '5', 'salary' => '2140000'],
        ];

        DB::table('salary_structure')->insert($salaries);
    }
}
