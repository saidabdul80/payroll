<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cra extends Model
{
    use HasFactory;
    protected $table = "cra";
    protected $fillable = [
        'fixed_amount',
        'minimum_percentage',
        'additional_percentage',
    ];
}
