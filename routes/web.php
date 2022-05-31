<?php

use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

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
// if(env('APP_ENV') == "live" || env('APP_ENV') == "test")
// {
//     \URL::forceScheme('https');
// }

// Site Get Routes
Route::get('/', [SiteController::class, 'getHome']);
Route::get('/staking', [SiteController::class, 'getStaking']);
Route::get('/add-trait', [SiteController::class, 'getAddTrait']);
Route::get('/nft/meta/{tokenID}', [SiteController::class, 'getMetadata']);
Route::get('add-metadata', [SiteController::class, 'getAddMetadata']);
