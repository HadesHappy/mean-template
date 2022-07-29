import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _authService:AuthService) { }

  ngOnInit(): void {}

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  authSuccess(){
    this._router.navigate(['/board']);
  }

  login(){
    if (!this.loginForm.valid){
      console.log('Invalid'); return;
    }

    console.log(JSON.stringify(this.loginForm.value))

    this._authService.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data); this.authSuccess();},
      error=>console.error(error)
    )
  }

}
