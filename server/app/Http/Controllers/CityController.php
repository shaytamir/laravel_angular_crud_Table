<?php
namespace App\Http\Controllers;

use App\Models\City;
// use GuzzleHttp\Psr7\Request;
use Illuminate\Http\Request;


class CityController extends Controller {
    public function postCity(Request $request){
        $city = new City();
        $city->name = $request-> input('name');
        $city->population = $request-> input('population');
        $city->country = $request-> input('country');
        $city->save();
        return response()->json(['city'=>$city],201);
    }

    public function getCities(){
        $cities = City::all();
        $response = [ 'cities'=> $cities ];
        return response()->json($response, 200);
    }

    public function putCity(Request $request, $id){
        $city = City::find($id);
        if( !$city ){
            return response()->json(['message' =>'Document not found']);
        }
        $city->name = $request-> input('name');
        $city->population = $request-> input('population');
        $city->country = $request-> input('country');
        $city->save();
        return response()->json(['city'=>$city],200);

    }
    public function patchCity(Request $request, $id){
        $city = City::find($id);
        if( !$city ){
            return response()->json(['message' =>'Document not found']);
        }
        $city->name = $request-> input('name');
        $city->population = $request-> input('population');
        $city->country = $request-> input('country');
        $city->save();
        return response()->json(['city'=>$city],200);

    }

    public function deleteCity($id){
        $city = City::find($id);
        $city->delete();
        return response()->json(['message'=>'City deleted'],200);

    }

}