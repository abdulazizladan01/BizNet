import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData;

  login(){
    console.log(this.loginUserData)
  }

  constructor(){ 
    this.loginUserData = {};
  }

  ngOnInit(): void{

  }

}
