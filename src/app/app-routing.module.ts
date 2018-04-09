import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CinemaComponent } from './components/cinema/cinema.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';




const routes: Routes = [
 
  { path: 'cinemas', component: CinemaComponent},
  { path: '', component: WelcomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
