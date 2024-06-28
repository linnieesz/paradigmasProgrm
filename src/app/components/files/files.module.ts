import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { FilesComponent } from "./files.component";


@NgModule({
  declarations: [
    FilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    FilesComponent
  ],
  providers: [],
  bootstrap: [FilesComponent]
  
})
export class RegisterModule { }
