import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'client';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  isNotOnLoginReg(): boolean {
    if (this._router.url === '/login' || this._router.url === '/register') {
      return false;
    } else {
      return true;
    }
  }
}
