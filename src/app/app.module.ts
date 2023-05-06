import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from 'src/app/components/home-page/home-page.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './components/menu/menu.module';
import { RegisterModule } from './register/register.module';

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
    MenuModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
