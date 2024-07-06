import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router,
    private userService: UsuarioService    
  ) {}
  
  redirectToRegister() {
    return this.router.navigate(['/register'])
  }

  redirectToFiles() {
    return this.router.navigate(['/files'])
  }

  redirectToCalendar() {
    return this.router.navigate(['/calendar'])
  }

  verify() {
    if (this.router.url == '/calendar' || this.router.url == '/workspace' || this.router.url == '/register') {
      return true
    } else {
      return false
    }
  }

  leftSite() {
    this.userService.deslogar()
  }

  defineHeaderColor() {
    if (this.router.url == '/files' || this.router.url == '/register') {
      return {
        background: '#5AAEED',
        color: '#fff'
      };
    } else if (this.router.url == '/calendar' || this.router.url == '/anamnese' || this.router.url == '/profile') {
      return {
        background: '#C9EEEF'
      };
    } else {
      return {
        background: '#9D6FD1'
      };
    }
  }

}
