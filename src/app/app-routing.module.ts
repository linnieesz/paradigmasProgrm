import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkspaceComponent } from './view/workspace.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'home', component: HomePageComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
