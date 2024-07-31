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
        Schema::create('pinjaman', function (Blueprint $table) {
            $table->id();
            $table->string("nama_peminjam");
            $table->string("kontak_peminjam");
            $table->string("nama_buku");
            $table->string("tanggal_pinjam");
            $table->string("tanggal_pengembalian");
            $table->string("estimasi");
            $table->string("status_peminjaman");
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('buku_id')->constrained('bukus');
            $table->foreignId('foto_buku');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pinjaman');
    }
};
