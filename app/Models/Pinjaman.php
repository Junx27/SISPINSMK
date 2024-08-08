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
        'status_peminjaman',
        'keterangan',
        'user_id',
        'buku_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function buku()
    {
        return $this->belongsTo(Buku::class);
    }
}
