<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;

Route::get('new/index', 'NewController@new');
Route::get('new/index2', 'NewController@new2');
Route::get('new/data', 'NewController@getdata');
Route::post('new/postdata', 'NewController@postData');
Route::get('new/hapus/{id}', 'NewController@hapus');
Route::get('new/edit/{id}', 'NewController@edit');
