import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  success = false;
  clash = false;
  passwordMatchError : string;

  constructor(private __auth: AuthService, private _router: Router, private fb: FormBuilder){ 
    
  }

  register(){
    if(this.registerForm.value.password != this.registerForm.value.password_verify){
      this.passwordMatchError  = "Passwords do not match."
    }else{
      this.__auth.register(this.registerForm.value).subscribe(
        res => {
          this.success = true;
        },
        err => {
          this.clash = true;
        }
      )
    }
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name : [
        '', [
          Validators.required
        ]
      ],
      last_name : [
        '', [
          Validators.required
        ]
      ],
      email : [
        '', [
          Validators.required,
          Validators.email,
          Validators.minLength(12)
        ]
      ],
      password : [
        '', [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      password_verify : [
        '', [
          Validators.required,
          Validators.minLength(8)

        ]
      ]
    })
  }

}
