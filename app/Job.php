<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    /*
     * @param $request
     */
    protected $fillable = [
        'user_id', 'country', 'state', 'lga', 'street_address', 'date_posted'
    ];
}
