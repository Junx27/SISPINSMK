<?php

namespace App\Http\Controllers;

use App\Mail\Developer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DeveloperController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Mail::to("junxitsumo@gmail.com")->send(new Developer());

        return "email terkirim";
    }
}
