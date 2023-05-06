import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  click() {
    //fazer service pra enviar o usuário/senha p api
    //usar try-catch para melhorar a sequência de erros
    this.router.navigate(['']);
  }
}
