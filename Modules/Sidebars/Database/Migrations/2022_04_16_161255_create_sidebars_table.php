<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sidebars', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('parentId')->default(0);
            $table->string('name');
            $table->string('icon')->nullable();
            $table->string('url')->nullable();
            $table->integer('order')->default(1);
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });
        Schema::create('sidebar_has_permissions', function (Blueprint $table) {
            $table->bigInteger('permissionId')->default(0);
            $table->bigInteger('sidebarId')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sidebar_has_permissions');
        Schema::dropIfExists('sidebars');
    }
};
