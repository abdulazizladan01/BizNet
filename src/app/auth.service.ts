import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(loginUserData){
    console.log(loginUserData);
    this._route.navigateByUrl('dashboard');
  }

  register(registerUserData){
    console.log(registerUserData);
  }

  loggedIn(){

  }
  constructor(private _http: HttpClient, private _route : Router){ 

  }
}
