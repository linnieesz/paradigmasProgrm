import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GoBackComponent } from "./go-back.component";


@NgModule({
  declarations: [
    GoBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    GoBackComponent
  ],
  providers: [],
  bootstrap: [GoBackComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class GoBackModule { }
