<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    use HasFactory;

    protected $fillable = [
        'imageUrl',
        'caption',
        'kategori',
        'penerbit',
        'tahun',
        'edisi',
        'jumlah_dipinjam',
        'desc',
        'user_id',
    ];
}
