import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CinemaComponent } from './components/cinema/cinema.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';





const routes: Routes = [
 
  { path: '', component: WelcomepageComponent},
  { path: 'welcomepage', component: WelcomepageComponent},
  { path: 'cinemas', component: CinemaComponent},
  { path: 'theatres', component: TheatreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'dashboard', component: DashboardComponent,
    children:[
      {path: '', component: HomepageComponent},
      {path: 'homepage', component: HomepageComponent},
      { path: 'cinemas', component: CinemaComponent}
    ]


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
