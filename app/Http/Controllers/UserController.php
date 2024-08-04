<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\Pinjaman;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bukus = Buku::all();
        $pinjamans = Pinjaman::all();
        return Inertia::render("Frontend/DaftarBuku", ["bukus" => $bukus, "pinjamans" => $pinjamans]);
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
        $validatedData = $request->validate([
            "nama_peminjam" => "required",
            "kontak_peminjam" => "required",
            "nama_buku" => "required",
            "tanggal_pinjam" => "required",
            "tanggal_pengembalian" => "required",
            "status_peminjaman" => "required",
            "user_id" => "required",
            "buku_id" => "required",
            'foto_buku' => 'required',
        ]);

        Pinjaman::create($validatedData);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $buku = Buku::findOrFail($id);
        return Inertia::render("Frontend/DetailBuku", ["buku" => $buku]);
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
        $validateData = $request->validate([
            "status_peminjaman" => "required",
            "keterangan" => "required",
        ]);
        $pinjaman = Pinjaman::findOrFail($id);
        $pinjaman->update($validateData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
