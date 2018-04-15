import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CinemaComponent } from './components/cinema/cinema.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FanzoneComponent } from './components/fanzone/fanzone.component';
import { OfficialstoreComponent } from './components/officialstore/officialstore.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AddThematicPropsComponent } from './components/add-thematic-props/add-thematic-props.component';

import { ReservationComponent} from './components/reservation/reservation.component';

import { CinemalogComponent} from './components/cinemalog/cinemalog.component';
import { EditThematicPropsComponent } from './components/edit-thematic-props/edit-thematic-props.component';




const routes: Routes = [
 
  { path: '', component: WelcomepageComponent},
  { path: 'welcomepage', component: WelcomepageComponent},
  { path: 'cinemas', component: CinemaComponent},
  { path: 'theatres', component: TheatreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'dashboard', component: DashboardComponent,
    children:[
      { path: '', component: HomepageComponent},
      { path: 'homepage', component: HomepageComponent},
      { path: 'cinemaslog', component: CinemalogComponent},
      { path: 'fanzone', component: FanzoneComponent,
        children:[
          {path: 'officialstore', component: OfficialstoreComponent},
          {path: 'announcement', component: AnnouncementComponent}
        ]
      },
      { path: 'addthematicprops', component: AddThematicPropsComponent},
      { path: 'editthematicprops', component: EditThematicPropsComponent},
    
      { path: 'reservation', component: ReservationComponent}
    ]


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
