<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;

class HomeController extends Controller
{
    public function index()
    {
        $header_page  = "page_home";
        $page         = "";

        return view('views.home', [
            'header_page'   => $header_page,
            'page'          => $page
        ]);
    }
}
