import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
    confirmPassword: new FormControl(null, Validators.required),
  })
  
  constructor(private _router:Router, private _authService:AuthService) { }

  ngOnInit(): void {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.confirmPassword.value)) {
      console.log('Invalid Form'); return;
    }

    console.log(JSON.stringify(this.registerForm.value));

    this._authService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this.moveToLogin();},
      error=> console.log(error)
    )
  }

}
