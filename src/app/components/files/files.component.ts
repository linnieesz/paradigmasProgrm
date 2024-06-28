import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  constructor(private router: Router) {}

  click() {
    this.router.navigate(['/login']);
  }
}
