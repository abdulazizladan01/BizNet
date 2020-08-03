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
        $data = $request->validate([
           "recipient_id" => ['required']
        ]);
        return Message::where('recipient_id', $request->recipient_id)
            ->join('users', 'users.id', 'messages.recipient_id')
            ->get();
    }

    function messageOutbox(Request $request){
        $data = $request->validate([
            "sender_id" => ['required']
        ]);
        return Message::where('sender_id', $request->sender_id)
            ->join('users', 'users.id', 'messages.sender_id')
            ->get();
    }

    function readSingleMessage(Request $request){
        return array("message" => "Message sent!", "status" => 200);
    }

    function deleteMessage(Request $request){
        return array("message" => "Message deleted successfully!", "status" => 200);
    }
}
