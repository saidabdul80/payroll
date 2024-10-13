<?php

namespace App\Enums;

enum DeductionType: int
{

    const SOCIAL_SECURITY_CONTRIBUTIONS= 0;
    const HEALTH_INSURANCE= 1;
    const RETIREMENT_PLAN= 2;
    const BENEFITS= 3;
    const UNDERTIME= 4;
    const UNION_FEE =5;

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
