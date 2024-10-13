<?php

namespace App\Enums;

enum AdditionType: int
{
    const REWARDS = 0;
    const INCENTIVES = 1;
    const REIMBURSEMENTS = 2;
    const SHIFT_DIFFERENTIALS = 3;
    const OVERTIME = 4;
    const COMMISSION = 5;

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


    public static function toArray(): array
    {
        $reflection = new \ReflectionClass(self::class);
        return $reflection->getConstants();
    }
}
