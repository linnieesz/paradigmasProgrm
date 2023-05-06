import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'home', component: HomePageComponent },  // you must add your component here
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
