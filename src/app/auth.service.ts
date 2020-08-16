import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl : string =  "./api/public/index.php/api/login";
  registerUrl :string = "./api/public/index.php/api/login";

  constructor(private _http: HttpClient, private _route : Router){
     
  }

  /* 
    Get an access token
    @param loginUserData The user emamil and password
  */

  login(loginUserData){
    return this._http.post<any>(this.loginUrl, loginUserData);
  }
  /**
   * Revoke the authenticated user token
   */

  logout() {
  }

  register(registerUserData){
    
  }

  loggedIn(){

  }
  
}
