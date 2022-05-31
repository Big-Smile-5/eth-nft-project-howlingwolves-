<?php

namespace App\Http\Controllers;

class SiteController extends Controller
{
    public function __construct()
    {
        
    }

    public function getHome()
    {
        
        $view_data = [
            'header' => [
                "title" => "Home | Warewolves",
                'css' => ['user_common.min.css'],
                // "meta" => $meta,
            ],
            'body' => [
                'id' => "home",
            ],
            'footer' => [
                "js" => ['user_common.min.js'],
            ],
        ];
        return view('site.home', $view_data);
    }

    public function getStaking()
    {
        
        $view_data = [
            'header' => [
                "title" => "Home | Warewolves",
                'css' => ['user_common.min.css'],
                // "meta" => $meta,
            ],
            'body' => [
                'id' => "home",
            ],
            'footer' => [
                "js" => ['user_common.min.js'],
            ],
        ];
        return view('site.stake', $view_data);
    }

    public function getAddTrait()
    {
        
        $view_data = [
            'header' => [
                "title" => "Add Trait | Warewolves",
                'css' => ['user_common.min.css'],
            ],
            'body' => [
                'id' => "home",
            ],
            'footer' => [
                "js" => ['user_common.min.js'],
            ],
        ];
        return view('site.add-trait', $view_data);
    }

    public function getAddMetadata(){

        $read_metadata = file_get_contents(url('nft/meta/meta.json'));
        $read_metadata = json_decode($read_metadata,true);
        // dd($read_metadata);
        \App\Models\Metadata::truncate();
        for($i=0;$i<count($read_metadata);$i++){
            $res = \App\Models\Metadata::add_metadata($read_metadata[$i]);
        }
        if($res){
            return 'Metadata add successfully';
        }else{
            return 'Something went wrong';
        }
    }


    public function getMetadata($tokenID){

        try {
            \Log::info('TokenID Time called.');
            $response =  \Illuminate\Support\Facades\Http::post(env('NODE_SERVER_URL') . "token-time", [
                "tokenID" => $tokenID
            ]);
            \Log::info("tokenIdTime Response");
            \Log::info($response);
            if($response['flag'] == 1)
                $tokenIdTime = strtolower($response['data']['time']);
            else
                \Log::info("Node server error: token id time.");
        } catch (\Exception $e) {
            \Log::info("Node server Error");
            \Log::info($e->getMessage());
        }

        $current_timestamp = time();
        if($tokenIdTime != 0){
            if($tokenIdTime < $current_timestamp){
                $img = url('nft/image/'.$tokenID.'.png');
            }else{
                $img = url('nft/image/dummy.png');
            }
        }else{
            return \response()->json(new \stdClass());
        }

        $metadata = \App\Models\Metadata::where('id',$tokenID)->first();
        // dd($metadata);
        $json = [];
        if($metadata){
            $json['description'] = $metadata['description'];
            $json['name'] = $metadata['name'];
            $json['image'] = $img;
            $json['attributes'] = json_decode($metadata['attribute']);
        }
        // dd($json);
        return $json;
    }

}
