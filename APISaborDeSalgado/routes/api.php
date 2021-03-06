<?php

use Illuminate\Http\Request;

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

Route::post('cadastro', ['uses' => 'UserController@store']);

Route::group(['middleware' => 'auth:api'], function (){
  Route::get('index', ['uses' => 'UserController@index']);
});

//Route::get('login', ['uses' => 'UserController@index']);