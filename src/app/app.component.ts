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
    if (this.router.url == '/workspace' ||  this.router.url == '/calendar' || this.router.url == '/files') {
      return true
    } else {
      return false
    }
  }
}
