<?php

use App\Http\Controllers\DataBukuController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('admin/user', function () {
    return Inertia::render('Admin/User');
})->middleware(['auth', 'verified'])->name('user');
Route::get('admin/buku', function () {
    return Inertia::render('Admin/Buku');
})->middleware(['auth', 'verified'])->name('buku');
Route::get('admin/daftarpinjaman', function () {
    return Inertia::render('Admin/DaftarPinjaman');
})->middleware(['auth', 'verified'])->name('daftarpinjaman');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('daftar-buku', [UserController::class, "index"]);

require __DIR__ . '/auth.php';
