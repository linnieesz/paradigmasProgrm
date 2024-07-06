import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files-profile.component.html',
  styleUrls: ['./files-profile.component.css']
})
export class FilesProfileComponent {
  
  queryField = new FormControl('');

  constructor(private router: Router) {}

  onSearch() {
    console.log(this.queryField.value)
  }

  goBack() {
    this.router.navigate(['/workspace'])
  }

  edit() {
    
  }

}
