<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('globals', function (Blueprint $table) {
            $table->decimal('minimum_wage_in_value', 15, 2)->nullable();
            $table->decimal('minimum_tax_determination_in_%', 5, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('globals', function (Blueprint $table) {
            $table->dropColumn('minimum_wage_in_value');
            $table->dropColumn('minimum_tax_determination_in_%');
        });
    }
};
