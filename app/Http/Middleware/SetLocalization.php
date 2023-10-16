<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLocalization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $parameters=$request->route()->parameters('language');
        if(count($parameters)!==0 && in_array($parameters['language'],['pl','en']))
        {
            App::setlocale($parameters['language']);

        }else{
           return redirect('/pl');
        }

        return $next($request);
    }
}
