<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    public function viewUser()
    {
        $users = User::get();
        return Inertia::render("Admin/User", ["users" => $users]);
    }
    public function viewUserDetail(String $id)
    {
        $user = User::find($id);
        return response()->json($user);
    }

    public function updateUser(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'email' => 'required|email',
            'kontak' => 'required',
            'gender' => 'required',
            'status' => 'required',
            // 'foto_profil' => 'required', // Optional file validation
        ]);

        $user = User::findOrFail($id);

        // if ($request->hasFile('foto_profil')) {
        //     // Optionally delete the old file
        //     if ($user->foto_profil) {
        //         Storage::delete($user->foto_profil);
        //     }

        //     $validatedData['foto_profil'] = $request->file('foto_profil')->store('foto_profil');
        // }


        $user->update($validatedData);
    }


    public function deleteUser(String $id)
    {
        $user = User::find($id);
        if ($user->foto_profil) {
            Storage::disk('public')->delete($user->foto_profil);
        }
        $user->delete();
    }

    public function createBook(Request $request)
    {

        $validatedData = $request->validate([
            'imageUrl' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            'caption' => 'nullable|string|max:255',
            'kategori' => 'nullable|string|max:255',
            'stok' => 'nullable|integer|max:255',
            'penerbit' => 'nullable|string|max:255',
            'tahun' => 'nullable|integer',
            'edisi' => 'nullable|string|max:255',
            'desc' => 'nullable|string',
            'user_id' => 'required',
        ]);
        if ($request->hasFile('imageUrl')) {

            $validatedData['imageUrl'] = $request->file('imageUrl')->store('buku', 'public');
        }
        Buku::create($validatedData);
    }
    public function updateBook(Request $request, string $id)
    {
        $book = Buku::findOrFail($id);

        $validatedData = $request->validate([
            'imageUrl' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
            'caption' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'stok' => 'required|integer',
            'penerbit' => 'required|string|max:255',
            'tahun' => 'required|integer',
            'edisi' => 'required|string|max:255',
            'desc' => 'required|string',
        ]);

        // // Cek apakah ada file gambar yang diunggah
        // if ($request->hasFile('imageUrl')) {
        //     // Hapus gambar lama jika ada
        //     if ($book->imageUrl) {
        //         Storage::disk('public')->delete($book->imageUrl);
        //     }

        //     // Simpan gambar baru
        //     $validatedData['imageUrl'] = $request->file('imageUrl')->store('buku', 'public');
        // }

        // // Perbarui data buku
        $book->update($validatedData);
    }

    public function deleteBook(String $id)
    {
        $book = Buku::find($id);
        if ($book->imageUrl) {
            Storage::disk('public')->delete($book->imageUrl);
        }
        $book->delete();
    }






    public function viewBuku()
    {
        $bukus = Buku::all();
        return Inertia::render("Admin/Buku", ["bukus" => $bukus]);
    }
    public function viewBukuDetail(String $id)
    {
        $buku = Buku::find($id);
        return response()->json($buku);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
