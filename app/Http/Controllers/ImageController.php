<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\User;
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


        if ($request->hasFile('imageUrl')) {

            if ($buku->imageUrl) {
                Storage::disk('public')->delete($buku->imageUrl);
            }


            $validatedData['imageUrl'] = $request->file('imageUrl')->store('buku', 'public');
        }

        $buku->update($validatedData);
    }
    public function viewFotoUser(string $id)
    {
        $user = User::findOrFail($id);
        return Inertia::render("Admin/EditFotoProfil", ["user" => $user]);
    }
    public function updateFotoUser(Request $request, string $id)
    {
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'foto_profil' => 'file',
        ]);


        if ($request->hasFile('foto_profil')) {

            if ($user->foto_profil) {
                Storage::disk('public')->delete($user->foto_profil);
            }


            $validatedData['foto_profil'] = $request->file('foto_profil')->store('foto_profil', 'public');
        }

        $user->update($validatedData);
    }
}
