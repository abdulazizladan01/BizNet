<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessPhoneNumber extends Model
{
    //
    protected $fillable = [
        'business_id', 'extension', 'number'
    ];
}
