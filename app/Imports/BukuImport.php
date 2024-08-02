<?php

namespace App\Imports;

use App\Models\Buku;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;

class BukuImport implements ToCollection, ToModel
{
    private $current = 0;
    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
    }
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
        ]);
    }
}
