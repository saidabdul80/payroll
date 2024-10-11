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
        Schema::table('employee_salaries', function (Blueprint $table) {
            $table->integer('salary_structure_id')->nullable();
            $table->integer('salary')->nullable()->change();
        });

        Schema::table('payrolls', function (Blueprint $table) {
            $table->float('tax_amount')->nullable();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employee_salaries', function (Blueprint $table) {
            $table->dropColumn('salary_structure_id');
        });

        Schema::table('payrolls', function (Blueprint $table) {
            $table->dropColumn('tax_amount');
        });
    }
};