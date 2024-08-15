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
        $pinjamans = Pinjaman::where("status_peminjaman", "meminjam")->where('user_id', auth()->user()->id)->with('buku:id,imageUrl,caption')->with("user:id,nama,kontak")->get();
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
        ]);

        Pinjaman::create($validatedData);
        $buku = Buku::findOrFail($validatedData["buku_id"]);
        if ($buku->stok > 0) {
            $buku->stok = $buku->stok - 1;
            $buku->jumlah_dipinjam = $buku->jumlah_dipinjam + 1;
            $buku->save();
        }
        return Inertia::location("/daftar-buku");
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

    public function landingPage()
    {
        $bukus = Buku::all()->shuffle();
        $slider = Buku::where("jumlah_dipinjam", ">", 20)->take(4)->get()->shuffle();
        $banyakDipinjam = Buku::where("jumlah_dipinjam", ">", 10)->take(12)->get()->shuffle();
        $karyaIlmiahSlider = Buku::where("kategori", "karya ilmiah")->take(12)->get()->shuffle();
        $karyaIlmiah = Buku::where("kategori", "karya ilmiah")->take(12)->get();
        $karyaNonIlmiahSlider = Buku::where("kategori", "karya non-ilmiah")->take(12)->get()->shuffle();
        $karyaNonIlmiah = Buku::where("kategori", "karya non-ilmiah")->take(12)->get();
        $ekononmiSlider = Buku::where("kategori", "ekonomi")->take(12)->get()->shuffle();
        $ekononmi = Buku::where("kategori", "ekonomi")->take(12)->get();
        $rekomendasiBuku = Buku::orderBy("created_at", "desc")->take(12)->get()->shuffle();
        return Inertia::render("Welcome", ["bukus" => $bukus, "banyakDipinjam" => $banyakDipinjam, "rekomendasiBuku" => $rekomendasiBuku, "karyaIlmiah" => $karyaIlmiah, "karyaIlmiahSlider" => $karyaIlmiahSlider, "karyaNonIlmiah" => $karyaNonIlmiah, "karyaNonIlmiahSlider" => $karyaNonIlmiahSlider, "ekonomi" => $ekononmi, "ekonomiSlider" => $ekononmiSlider, "slider" => $slider]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
