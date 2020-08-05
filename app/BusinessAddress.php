<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BusinessAddress extends Model
{
    //
    protected $fillable = [
        'business_id', 'country', 'state', 'lga', 'street_address',
    ];
}
