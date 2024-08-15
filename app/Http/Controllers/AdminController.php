<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\Pinjaman;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function dashboard()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        $bukus = Buku::orderBy('created_at', 'desc')->get();
        $pinjamans = Pinjaman::orderBy('created_at', 'desc')->get();
        $analisis = Pinjaman::all();
        return Inertia::render("Admin/Dashboard", ["users" => $users, "bukus" => $bukus, "pinjamans" => $pinjamans, "analisis" => $analisis]);
    }
    public function viewUser()
    {
        $users = User::where("role", "anggota")->orderBy('created_at', 'desc')->get();
        $bukus = Buku::orderBy('created_at', 'desc')->get();
        $pinjamans = Pinjaman::orderBy('created_at', 'desc')->get();
        return Inertia::render("Admin/User", ["users" => $users, "bukus" => $bukus, "pinjamans" => $pinjamans]);
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
        ]);

        $user = User::findOrFail($id);
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
        return Inertia::location("/admin/buku");
    }
    public function updateBook(Request $request, string $id)
    {
        $book = Buku::findOrFail($id);

        $validatedData = $request->validate([
            'caption' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'stok' => 'required|integer',
            'penerbit' => 'required|string|max:255',
            'tahun' => 'required|integer',
            'edisi' => 'required|string|max:255',
            'desc' => 'required|string',
        ]);
        $book->update($validatedData);
        return Inertia::location("/admin/buku");
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
        $users = User::orderBy('created_at', 'desc')->get();
        $bukus = Buku::orderBy('created_at', 'desc')->get();
        $pinjamans = Pinjaman::orderBy('created_at', 'desc')->get();
        return Inertia::render("Admin/Buku", ["users" => $users, "bukus" => $bukus, "pinjamans" => $pinjamans]);
    }
    public function viewBukuDetail(String $id)
    {
        $buku = Buku::find($id);
        return response()->json($buku);
    }

    public function viewDaftarPinjaman()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        $bukus = Buku::orderBy('created_at', 'desc')->get();
        $pinjamans = Pinjaman::with('buku:id,imageUrl,caption')->with("user:id,nama,kontak")->orderBy('created_at', 'desc')->get();
        return Inertia::render("Admin/DaftarPinjaman", ["users" => $users, "bukus" => $bukus, "pinjamans" => $pinjamans]);
    }
    public function viewDetailDaftarPinjaman(String $id)
    {
        $pinjaman = Pinjaman::with('buku:id,imageUrl,caption')->with("user:id,nama,kontak")->findOrFail($id);
        return response()->json($pinjaman);
    }
    public function updateDaftarPinjaman(Request $request, String $id)
    {
        $validatedData = $request->validate([
            "status_peminjaman" => "required",
            "keterangan" => "required",
            "buku_id" => "required",
        ]);
        $pinjaman = Pinjaman::findOrFail($id);
        $pinjaman->update($validatedData);
        $buku = Buku::findOrFail($validatedData["buku_id"]);
        $buku->stok = $buku->stok + 1;
        $buku->save();
        return Inertia::location("/admin/daftarpinjaman");
    }
    public function deleteDaftarPinjaman(String $id)
    {
        $pinjam = Pinjaman::findOrFail($id);
        $pinjam->delete();
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
