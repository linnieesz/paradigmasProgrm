import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HomePageComponent } from "./home-page.component";


@NgModule({
  declarations: [
      HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [],
  bootstrap: [HomePageComponent]
  
})
export class HomePageModule { }
