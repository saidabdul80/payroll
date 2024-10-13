<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettlementsTable extends Migration
{
    public function up()
    {
        Schema::create('settlements', function (Blueprint $table) {
            $table->id();
            $table->decimal('amount', 12, 2);
            $table->date('date');
            $table->unsignedBigInteger('settleable_id');
            $table->string('description', 50);
            $table->string('reference');
            $table->tinyInteger('status')->default(0);
            $table->timestamps(); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('settlements');
    }
}
