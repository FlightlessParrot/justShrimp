<?php

use App\Http\Controllers\ProfileController;
use App\Mail\SendForm;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Laravel\Prompts\error;

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
Route::middleware(['lang'])->group(function (){
Route::get('/{language?}', function () {
    return Inertia::render('Main',['lang'=>__('main')]);
});

Route::get('/{language?}/contact', function () {
    return Inertia::render('Contact',['lang'=>__('contact')]);
});
});



Route::get('/pl/mailable',function(){
    $data=[
        'subject'=> 'website',
        'message'=>'Make my website, please.',
        'tel'=>'+48 730 977 004',
        'email'=>'meeeczarnia@gmail.com'
    ];
    return new \App\Mail\SendForm($data);
});

Route::post('/send/mail', function (Request $request){

    $request->validate([
        'tel'=>'required',
        'email'=>'required|email',
        'message'=>'required|max:1000',
        'subject'=>'required|max:250'
    ]);
    $message=$request->all();
   
    try{
        Mail::to(env('SHRIMP_MAIL','shrimpinweb@gmail.com'))->send(new SendForm($message));
    }
    catch(Exception $e)
    {
       $request->session()->flash('message', __('flash.mail.failure'));  
       return back();
    }
    
    
    $request->session()->flash('message', __('flash.mail.success'));
    return back();
    
});
require __DIR__.'/auth.php';
