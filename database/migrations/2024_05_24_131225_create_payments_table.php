<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('reference');
            $table->date('date');
            $table->decimal('amount', 12, 2);   
            $table->decimal('paid_amount', 12, 2)->default(0);   
            $table->decimal('charges', 12, 2)->default(0);         
            $table->tinyInteger('status')->default(0);
            $table->string('gateway');
            $table->string('channel')->nullable();                             
            $table->string('owner_type'); 
            $table->string('redirect',500)->nullable();
            $table->unsignedBigInteger('owner_id'); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
