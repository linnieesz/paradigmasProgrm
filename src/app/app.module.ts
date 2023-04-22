import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from 'src/app/home-page/home-page.module';
import { LoginModule } from 'src/app/login/login.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HomePageModule,
    LoginModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
