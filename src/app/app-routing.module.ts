import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkspaceComponent } from './view/workspace.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FilesComponent } from './components/files/files.component';
import { FilesAnamneseComponent } from './components/files-anamnese/files-anamnese.component';
import { FilesProfileComponent } from './components/files-profile/files-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'anamnese', component: FilesAnamneseComponent },
  { path: 'profile', component: FilesProfileComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'files', component: FilesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
