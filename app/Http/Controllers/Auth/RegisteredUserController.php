<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create()
    {
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate the request data
        $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'foto_profil' => 'nullable|file|image|max:2048', // Add image validation rules
        ]);

        // Initialize the file path variable
        $fotoProfilPath = null;

        // Check if a file is uploaded
        if ($request->hasFile('foto_profil')) {
            // Store the file and get its path
            $fotoProfilPath = $request->file('foto_profil')->store('foto_profil', 'public');
        }

        // Create the user
        $user = User::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'foto_profil' => $fotoProfilPath, // Store the file path in the database
        ]);

        // Trigger the Registered event
        event(new Registered($user));

        // Log in the user
        Auth::login($user);

        // Redirect to the dashboard
        return redirect()->route('dashboard');
    }
}
