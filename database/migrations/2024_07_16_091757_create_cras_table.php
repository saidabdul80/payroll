<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('cra', function (Blueprint $table) {
            $table->id();
            $table->decimal('fixed_amount', 15, 2);
            $table->decimal('minimum_percentage', 5, 2);
            $table->decimal('additional_percentage', 5, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cra');
    }
};
