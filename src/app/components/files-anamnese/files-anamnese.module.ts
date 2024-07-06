import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilesAnamneseComponent } from "./files-anamnese.component";


@NgModule({
  declarations: [
    FilesAnamneseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    FilesAnamneseComponent
  ],
  providers: [],
  bootstrap: [FilesAnamneseComponent]
  
})
export class FilesAnamneseModule { }
