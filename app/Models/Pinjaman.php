<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pinjaman extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_peminjam',
        'kontak_peminjam',
        'nama_buku',
        'tanggal_pinjam',
        'tanggal_pengembalian',
        'estimasi',
        'status_peminjaman',
        'user_id',
        'buku_id',
        'foto_buku',
    ];
}
