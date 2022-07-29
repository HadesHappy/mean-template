import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _user:AuthService, private _router:Router) {
    // This basically only allows access to page if user is authenticated
    this._user.user()
    .subscribe(
      data=>console.log(data),
      error=>this._router.navigate(['/login'])
    )
   }

  ngOnInit(): void {
  }

  moveToSettings(){
    this._router.navigate(['/settings']);
  }

}
