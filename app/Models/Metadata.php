<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;
class Metadata extends Eloquent
{

    public $table = 'metadata';
    protected $hidden = [];
    protected $fillable = ['description','name','attribute'];
    protected $appends = [];

    public static function add_metadata($param){
        try{    
            $obj = new self;
       
            $obj->description = $param['description'];
            $obj->name = $param['name'];
            $obj->attribute = json_encode($param['attributes']);
            $obj->save();
            return true;
        } catch (Exception $e) {
            \Log::info($e);
            return false;
        }
    }
}
