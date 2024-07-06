import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilesProfileComponent } from "./files-profile.component";


@NgModule({
  declarations: [
    FilesProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    FilesProfileComponent
  ],
  providers: [],
  bootstrap: [FilesProfileComponent]
  
})
export class FilesProfileModule { }
