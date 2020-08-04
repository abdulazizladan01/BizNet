<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    //
    protected $fillable = [
        'id', 'name', 'added_by', 'verified',
    ];
}
