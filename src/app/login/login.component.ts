import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  success = false;

  constructor(private _auth : AuthService, private _router: Router, private fb: FormBuilder) {

  }

 login(){
    console.log(this.loginForm.value)
  }

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      email : ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password : ['',[
          Validators.required,
        Validators.minLength(6)
        ]
      ]
    })
  }

}
