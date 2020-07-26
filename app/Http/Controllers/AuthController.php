<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        try{
            $request->validate([
               'email' => 'email|required',
               'password' => 'required'
            ]);
            $credentials = request(['email', 'password']);
        }catch(Exception $error){
            return response()->json([
               'status_code' => 500,
               'message' => 'Error in login',
               'error' => $error
            ]);
        }
    }
}
