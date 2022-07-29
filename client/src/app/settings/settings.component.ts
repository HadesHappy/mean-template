import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  firstName: String='';
  
  constructor(private _user:AuthService, private _router:Router) {
    this._user.user()
    .subscribe(
      data=>this.getFirstName(data),
      error=>this._router.navigate(['/login'])
    )
   }

  getFirstName(data){
    this.firstName = data.firstName;
  }

  ngOnInit(): void {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.log(error)
    )
  }

}
