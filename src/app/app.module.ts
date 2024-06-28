import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from 'src/app/components/home-page/home-page.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './components/menu/menu.module';
import { RegisterModule } from './components/register/register.module';
import { CalendarModule } from './components/calendar/calendar.module';

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
    RegisterModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
