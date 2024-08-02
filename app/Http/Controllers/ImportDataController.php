<?php

namespace App\Http\Controllers;

use App\Imports\BooksImport;
use App\Imports\BukuImport;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ImportDataController extends Controller
{
    public function view()
    {
        return Inertia::render("Admin/ImportBuku");
    }
    public function import(Request $request)
    {
        Excel::import(new BukuImport, $request->file("file"));
        return redirect("admin/buku");
    }
}
