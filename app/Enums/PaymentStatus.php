<?php

namespace App\Enums;

enum PaymentStatus: int
{
    const UNPAID = 0;
    const PAID = 1;
    const PART_PAID = 2;

    public static function getKey($value)
    {
        $constants = self::toArray();
        return array_search($value, $constants, true);
    }

    public static function getValue(string $key): ?int
    {
        $constants = self::toArray();
        return $constants[$key] ?? null;
    }


    private static function toArray(): array
    {
        $reflection = new \ReflectionClass(self::class);
        return $reflection->getConstants();
    }
}