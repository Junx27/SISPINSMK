<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImageController extends Controller
{
    public function viewFotoBuku(string $id)
    {
        $buku = Buku::findOrFail($id);
        return Inertia::render("Admin/EditFotoBuku", ["buku" => $buku]);
    }
    public function updateFotoBuku(Request $request, string $id)
    {
        $buku = Buku::findOrFail($id);
        $validatedData = $request->validate([
            'imageUrl' => 'file',
        ]);


        if ($request->file('imageUrl')) {

            if ($buku->imageUrl) {
                Storage::disk('public')->delete($buku->imageUrl);
            }


            $validatedData['imageUrl'] = $request->file('imageUrl')->store('buku', 'public');
        }

        Buku::findOrFail($id)->update($validatedData);
    }
}
