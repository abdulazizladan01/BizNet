<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
           'first_name' => 'Abdulaziz',
           'last_name' => 'Ladan',
           'gender' => 'm',
           'email' => 'abdulazizladan@gmail.com',
           'password' => Hash::make('password')
        ]);
        DB::table('users')->insert([
            'first_name' => 'Abdul',
            'last_name' => 'Ladanski',
            'gender' => 'm',
            'email' => 'abdulazizladan@biznet.com.ng',
            'password' => Hash::make('password')
        ]);

    }
}
