<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalaryStructure extends Model
{
    use HasFactory;

    // Define the table name if it's not the plural of the model name
    protected $table = 'salary_structure';

    // Define the fillable attributes
    protected $fillable = [
        'scheme',
        'level',
        'step',
        'salary',
    ];

    // Add any relationships or custom methods if necessary
}
