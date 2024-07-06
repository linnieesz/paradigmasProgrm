import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luz do Organizar';

  constructor(private router: Router) { }

  verify() {
    if (this.router.url == '/workspace' ||  this.router.url == '/calendar' || this.router.url == '/files' || this.router.url == '/register' || this.router.url == '/anamnese' || this.router.url == '/profile') {
      return true
    } else {
      return false
    }
  }

  verifyTree() {
    if (this.router.url == '/calendar' ||  this.router.url == '/files' || this.router.url == '/register') {
      return true
    } else {
      return false
    }
  }
}
