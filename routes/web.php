<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DataBukuController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ImportDataController;
use App\Http\Controllers\PageNotFoundController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QrCodeController;
use App\Http\Controllers\TestEmailSendingController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [UserController::class, "landingPage"]);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('admin/dashboard', [AdminController::class, "dashboard"])->name('dashboard');
    Route::post('admin/buku-create', [AdminController::class, "createBook"]);
    Route::put('admin/buku-update/{id}', [AdminController::class, "updateBook"]);
    Route::get('admin/buku', [AdminController::class, "viewBuku"])->name("buku");
    Route::get('admin/buku/{id}', [AdminController::class, "viewBukuDetail"]);
    Route::get('admin/buku-foto/{id}', [ImageController::class, "viewFotoBuku"]);
    Route::put('admin/buku-foto/{id}', [ImageController::class, "updateFotoBuku"]);
    Route::get('admin/user-foto/{id}', [ImageController::class, "viewFotoUser"]);
    Route::put('admin/user-foto/{id}', [ImageController::class, "updateFotoUser"]);
    Route::delete('admin/buku/{id}', [AdminController::class, "deleteBook"]);
    Route::put('admin/buku-stok-pinjam/{id}', [AdminController::class, "updateStokBukuPinjam"]);
    Route::put('admin/buku-stok-kembali/{id}', [AdminController::class, "updateStokBukuKembali"]);
    Route::get('admin/user', [AdminController::class, "viewUser"]);
    Route::get('admin/user/{id}', [AdminController::class, "viewUserDetail"]);
    Route::delete('admin/user/{id}', [AdminController::class, "deleteUser"]);
    Route::put('admin/user-update/{id}', [AdminController::class, "updateUser"]);
    Route::post("/import", [ImportDataController::class, "import"]);
    Route::get("/import", [ImportDataController::class, "view"]);
    Route::get('admin/daftarpinjaman', [AdminController::class, "viewDaftarPinjaman"]);
    Route::get('admin/daftarpinjaman/{id}', [AdminController::class, "viewDetailDaftarPinjaman"]);
    Route::delete('admin/daftarpinjaman-delete/{id}', [AdminController::class, "deleteDaftarPinjaman"]);
    Route::put('admin/daftarpinjaman-update/{id}', [AdminController::class, "updateDaftarPinjaman"]);
    Route::get('/generate/{id}', [QrCodeController::class, 'generate']);
    Route::get('/buku/{id}', function () {
        return Inertia::render("Frontend/SingleBuku");
    });
    Route::get('/qr-code', function () {
        return Inertia::render('GenerateQrCode');
    });

    Route::get('daftar-buku', [UserController::class, "index"])->name("daftar-buku");
    Route::get("daftar-buku-detail/{id}", [UserController::class, "show"]);
    Route::post("buat-pinjaman-buku", [UserController::class, "store"]);
    Route::put("update-pinjaman-buku/{id}", [UserController::class, "update"]);
});





Route::fallback([PageNotFoundController::class, "index"]);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});







require __DIR__ . '/auth.php';
