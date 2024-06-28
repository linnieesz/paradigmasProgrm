import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CalendarComponent } from "./calendar.component";


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CalendarComponent
  ],
  providers: [],
  bootstrap: [CalendarComponent]
  
})
export class CalendarModule { }
