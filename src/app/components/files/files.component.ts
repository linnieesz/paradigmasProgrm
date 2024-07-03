import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {
  
  queryField = new FormControl('');

  constructor(private router: Router) {}

  onSearch() {
    console.log(this.queryField.value)
  }
}
