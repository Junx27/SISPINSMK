<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrCodeController extends Controller
{
    public function generate(Request $request)
    {
        $id = $request->query('id');

        return response()->streamDownload(
            function () use ($id) { // Menggunakan use untuk membawa $id ke dalam fungsi anonim
                echo QrCode::size(200)
                    ->style('dot')
                    ->eye('circle')
                    ->color(0, 0, 255)
                    ->margin(1)
                    ->format('png')
                    ->generate("data buku ke {$id}"); // Memperbaiki format string
            },
            'qr-code.png',
            [
                'Content-Type' => 'image/png',
            ]
        );
    }
}
