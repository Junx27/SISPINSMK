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
        Schema::create('analises', function (Blueprint $table) {
            $table->id();
            $table->string("tanggal_pinjam");
            $table->string("nama_buku");
            $table->string("nama_peminjam");
            $table->integer("jumlah_pinjam");
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('buku_id')->constrained('bukus');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('analises');
    }
};
