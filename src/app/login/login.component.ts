import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData;
  
  emailErrorMessage:string;
  passwordErrorMessage:string;

  constructor(private _auth : AuthService, private _router: Router) {
    this.loginUserData = {
      "email" : "",
      "password" : ""
    };
  }

  login() : void{
    if(this.loginUserData.email == ""){
      this.emailErrorMessage = "email field cannot be empty";
    }else if(this.loginUserData.password == ""){
      this.passwordErrorMessage = "password field cannot be empty";
      }else{
        this._auth.login(this.loginUserData).subscribe(
          res => {
            console.log(res)
          }, err => {
            console.log(err)
          }
        )
    }
  }
  
  ngOnInit(): void{

  }

}
