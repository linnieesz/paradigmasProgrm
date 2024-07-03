import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from 'src/app/components/home-page/home-page.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from './components/menu/menu.module';
import { RegisterModule } from './components/register/register.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { HttpClientModule } from '@angular/common/http';
import { FilesModule } from './components/files/files.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageModule,
    LoginModule,
    MenuModule,
    RegisterModule,
    FilesModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
