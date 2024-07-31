<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DataBukuController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\PageNotFoundController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QrCodeController;
use App\Http\Controllers\TestEmailSendingController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('admin/buku', [AdminController::class, "viewBuku"]);
    Route::get('admin/user', [AdminController::class, "viewUser"]);
    Route::get('admin/user/{id}', [AdminController::class, "viewUserDetail"]);
    Route::delete('admin/user/{id}', [AdminController::class, "deleteUser"]);

    Route::get('admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    Route::get('daftar-buku', [UserController::class, "index"]);
});


Route::get('admin/daftarpinjaman', function () {
    return Inertia::render('Admin/DaftarPinjaman');
})->middleware(['auth', 'verified'])->name('daftarpinjaman');


Route::fallback([PageNotFoundController::class, "index"]);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::get('/generate/{id}', [QrCodeController::class, 'generate']);
Route::get('/buku/{id}', function () {
    return Inertia::render("Frontend/SingleBuku");
});
Route::get('/qr-code', function () {
    return Inertia::render('GenerateQrCode');
});

require __DIR__ . '/auth.php';
