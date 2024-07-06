import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files',
  templateUrl: './files-anamnese.component.html',
  styleUrls: ['./files-anamnese.component.css']
})
export class FilesAnamneseComponent {
  
  queryField = new FormControl('');

  constructor(private router: Router) {}

  onSearch() {
    console.log(this.queryField.value)
  }

}
