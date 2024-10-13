<?php

namespace App\Models;

use App\Enums\AdditionType;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Addition extends Model
{
    use HasFactory, LogsActivity;
    protected $guarded = [];
    protected $fillable = [
        "payroll_id",
        "addition",
        "type",
        "amount",
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['name', 'text']);
    }


    protected function addition(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return AdditionType::getKey($value);
            },
            set: function ($value) {
                return  AdditionType::getValue($value);
            }
        );
    }


    public function getSum()
    {
        return 0;
    }
    public function payroll(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Payroll::class);
    }
}
