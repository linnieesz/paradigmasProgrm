import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { RegisterComponent } from "./register.component";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: [],
  bootstrap: [RegisterComponent]
  
})
export class RegisterModule { }
