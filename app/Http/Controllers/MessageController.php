<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    function send(Request $request){
        return "sending";
    }

    function show(Request $request){
        return "Showing all messages";
    }

    function readSingle(Request $request){
        return "Showing message";
    }

    function delete(Request $request){

    }
}
