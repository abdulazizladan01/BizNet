<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
 * User login route
 */
Route::post('login', "UserController@login");

/*
 *
 */
Route::post('register', "UserController@register");

/*
 *
 */
Route::middleware('auth:sanctum')->get('users', "UserController@users");
/*
 *
 */
Route::middleware('auth:sanctum')->put('changeName', "UserController@changeName");
/*
 *
 */
Route::middleware('auth:sanctum')->put('changePassword', "UserController@changePassword");

Route::post('sendMessage', "MessageController@sendMessage");

Route::get('messageInbox', "MessageController@messageInbox");

Route::get('messageOutbox', "MessageController@messageOutbox");

Route::get('readSingleMessage', "MessageController@readSingleMessage");

Route::delete('deleteMessage', "MessageController@deleteMessage");
