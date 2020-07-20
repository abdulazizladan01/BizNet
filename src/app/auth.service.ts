import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl : string =  "http://localhost:8000/oauth/token";
  apiUrl :string = "http://localhost:8000/api";
  options : any;

  /* 
    Get an access token
    @param loginUserData The user emamil and password
  */

  login(loginUserData){
    //console.log(loginUserData);
    //this._route.navigateByUrl('dashboard');
    return this._http.post(this.authUrl, {
      grant_type : 'password',
      client_id : '4',
      client_secret : '',
      username : loginUserData.email,
      password : loginUserData.password,
      scope : 'Utm7y3cpXr6H1AWZdJbMGaaAtw60fIt5g0iL9Uwv'
    }, this.options);
  }
  /**
   * Revoke the authenticated user token
   */

  logout() {
    this.options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    return this._http.get(this.apiUrl + '/token/revoke', this.options);
  }

  register(registerUserData){
    console.log(registerUserData);
  }

  loggedIn(){

  }
  constructor(private _http: HttpClient, private _route : Router){ 
    this.options = {
      headers : new HttpHeaders({
        Accept : 'application/json'
      })
    }
  }
}
