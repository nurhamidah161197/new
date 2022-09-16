<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\New1;
use DB;

class NewController extends Controller
{
    public function new(){
        $header_page  = "page_home";
        $page         = "";

        return view('views.home', [
            'header_page'   => $header_page,
            'page'          => $page
        ]);
    }

    public function new2(){
        $header_page  = "page_home";
        $page         = "";

        return view('views.home2', [
            'header_page'   => $header_page,
            'page'          => $page
        ]);
    }

    public function getdata(){
        $data = New1::all(); //semua
        // $data = New1::get(); //semua
        // $data = New1::where('id',1)->orderBy('id','DESC')->first(); , $data = DB::select("SELECT * FROM new WHERE id = 1 LIMIT 1");
        // $data = New1::delete(); //hapus

        return response()->json([
            'data' => $data
        ]);
    }

    public function postData(Request $request){
        New1::updateOrCreate([
            'id'    => $request->id
        ],[
            'nama'  => $request->nama,
            'nim'   => $request->nimsaya
        ]);
    }

    public function hapus($id){
        New1::where('id',$id)->delete();
    }

    public function edit($id){
        $data = New1::where('id',$id)->first();

        return response()->json([
            'data' => $data
        ]);
    }
}
