import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CinemaComponent } from './components/cinema/cinema.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
 
  { path: '', component: WelcomepageComponent},
  { path: 'cinemas', component: CinemaComponent},
  { path: 'theatres', component: TheatreComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
