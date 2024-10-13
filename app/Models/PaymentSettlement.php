<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentSettlement extends Model
{
    use HasFactory;

    protected $fillable = [
        'share',
        'settlement_id',
        'payment_id',
        'status',
        'token'
    ];

    public function settlement()
    {
        return $this->belongsTo(Settlement::class);
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }
}
