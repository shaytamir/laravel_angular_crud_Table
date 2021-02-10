<?php
namespace App\Http\Controllers;

// use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Route;

Route::get('/cities', [
    CityController::class, 'getCities'
    ]);

Route::post('/city',[
    CityController::class,'postCity'
]);

Route::put('/city/{id}',[
     CityController::class,'putCity'
]);

Route::patch('/city/{id}',[
     CityController::class,'patchCity'
]);

Route::delete('/city/{id}',[
     CityController::class,'deleteCity'
]);
