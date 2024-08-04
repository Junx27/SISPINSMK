<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrCodeController extends Controller
{
    public function generate(string $id)
    {
        return response()->streamDownload(
            function () use ($id) {
                echo QrCode::size(200)
                    ->format('png')
                    ->generate("http://127.0.0.1:8000/daftar-buku-detail/{$id}"); // Use double quotes for string interpolation
            },
            'qr-code.png',
            [
                'Content-Type' => 'image/png',
            ]
        );
    }
}
