<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settlement extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'date',
        'settleable_type',
        'settleable_id',
        'description',
        'reference',
        'status'
    ];

    public function settleable()
    {
        return $this->morphTo();
    }
}
