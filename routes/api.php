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
 * @param
 */
Route::post('login', "UserController@login");

/*
 * User registration route
 * @param
 */
Route::post('register', "UserController@register");

/*
 * Users fetch route route
 * @param
 */
Route::middleware('auth:sanctum')->get('users', "UserController@users");
/*
 * User change name route
 * @param
 */
Route::middleware('auth:sanctum')->put('changeName', "UserController@changeName");
/*
 * User change password route
 * @param
 */
Route::middleware('auth:sanctum')->put('changePassword', "UserController@changePassword");

/*
 * Message send route
 */
Route::post('sendMessage', "MessageController@sendMessage");

/*
 * Message inbox route
 * @param
 */
Route::get('messageInbox', "MessageController@messageInbox");

/*
 * Message outbox route
 * @param
 */
Route::get('messageOutbox', "MessageController@messageOutbox");

/*
 * Read single message route
 * @param
 */
Route::get('readSingleMessage', "MessageController@readSingleMessage");

/*
 * Delete message route
 * @param
 */
Route::delete('deleteMessage', "MessageController@deleteMessage");
