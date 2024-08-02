<?php

namespace App\Imports;

use App\Models\Buku;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class BooksImport implements ToModel, WithHeadingRow
{
    /**
     * @param array $row
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Buku([
            'imageUrl' => $row[0],
            'caption' => $row[1],
            'kategori' => $row[2],
            'stok' => $row[3],
            'penerbit' => $row[4],
            'tahun' => $row[5],
            'edisi' => $row[6],
            'desc' => $row[7],
            'jumlah_dipinjam' => $row[8],
            'user_id' => $row[9],
        ]);
    }
}
