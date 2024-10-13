<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentSettlementsTable extends Migration
{
    public function up()
    {
        Schema::create('payment_settlements', function (Blueprint $table) {
            $table->id(); 
            $table->decimal('share', 15, 2);
            $table->unsignedBigInteger('settlement_id'); 
            $table->string('token');
            $table->integer('status');
            $table->timestamps();
            $table->foreign('settlement_id')->references('id')->on('settlements')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_settlements');
    }
}
