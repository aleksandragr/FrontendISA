import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CinemaTheatreComponent } from './components/cinema-theatre/cinema-theatre.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';




const routes: Routes = [
 
  { path: 'cinemas', component: CinemaTheatreComponent},
  { path: '', component: WelcomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
