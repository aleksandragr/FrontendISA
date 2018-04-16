import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import {WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { TheatreComponent } from './components/theatre/theatre.component';

import { CinemaService} from './services/cinema/cinema.service';
import { TheatreService} from './services/theatre/theatre.service';
import { LoggedinService } from './services/loggedin/loggedin.service';
import { UserService } from './services/user/user.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FanzoneComponent } from './components/fanzone/fanzone.component';
import { OfficialstoreComponent } from './components/officialstore/officialstore.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { ThematicpropsService } from './services/thematicprops/thematicprops.service';
import { AddThematicPropsComponent } from './components/add-thematic-props/add-thematic-props.component';
import { ReservationComponent } from './components/reservation/reservation.component';

import { CinemalogComponent } from './components/cinemalog/cinemalog.component';
import { ProjectionsService } from './services/projections/projections.service';
import { EditThematicPropsComponent } from './components/edit-thematic-props/edit-thematic-props.component';
import { AddAnnouncementComponent } from './components/add-announcement/add-announcement.component';
import { AnnouncementService } from './services/announcement/announcement.service';
import { BidService } from './services/bid/bid.service';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    WelcomepageComponent,
    TheatreComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    HomepageComponent,
    FanzoneComponent,
    OfficialstoreComponent,
    AnnouncementComponent,
    AddThematicPropsComponent,
    ReservationComponent,
    CinemalogComponent,
    EditThematicPropsComponent,
    AddAnnouncementComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    Ng2Webstorage
  ],
  providers: [CinemaService, TheatreService, UserService,LoggedinService,ThematicpropsService,ProjectionsService,
    AnnouncementService,BidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
