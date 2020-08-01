<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $request){
        $data = $request->validate([
            "first_name" => ['required'],
            "last_name" => ['required'],
            "email" => ['email', 'required', 'min:12'],
            "password" => ['required', 'min:8']
        ]);
        $data['password'] = Hash::make($request->password);
        User::create($data);
        return response()->json(["message" => "User successfully registered!"]);
    }

    /* login function : Accepts email and password
    /@Param $request
    */
    function index(Request $request){
        $user= User::where('email', $request->email)->first();
        // print_r($data);
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
    /*
     * List users
     */
    function changeName(){
        return "Name changed";
    }

    function changePassword(){
        return "Password changed";
    }

    function users(){
        return User::all();
    }
}
