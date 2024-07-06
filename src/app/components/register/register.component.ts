import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private route: ActivatedRoute,
    private router: Router) {}

  click() {
    this.router.navigate(['/login']);
  }
  
  goToAnamnese() {
    this.router.navigate(['anamnese']);
  }
  
  goToProfile() {
    this.router.navigate(['profile']);
  }
}
