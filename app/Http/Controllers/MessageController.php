<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use Illuminate\Support\Facades\Hash;
use PhpParser\Error;

class MessageController extends Controller
{
    function sendMessage(Request $request){
        $data = $request->validate([
            "subject" => ['required'],
            "body" => ['required'],
            "sender_id" => ['required'],
            "recipient_id" => ['required']
        ]);
        Message::create($data);
        return response()->json(["message" => "Message sent successfully" ]);
    }

    function messageInbox(Request $request){
        return array("message" => "Inbox!", "status" => 200);
    }

    function messageOutbox(Request $request){
        return array("message" => "Showing outbox", "status" => 200);
    }

    function readSingleMessage(Request $request){
        return array("message" => "Message sent!", "status" => 200);
    }

    function deleteMessage(Request $request){
        return array("message" => "Message deleted successfully!", "status" => 200);
    }
}
