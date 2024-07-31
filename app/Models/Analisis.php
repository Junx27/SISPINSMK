<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analisis extends Model
{
    use HasFactory;

    protected $fillable = [
        'tanggal_pinjam',
        'nama_buku',
        'nama_peminjam',
        'jumlah_pinjam',
        'user_id',
        'buku_id',
    ];
}
