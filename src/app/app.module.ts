import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import {WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { TheatreComponent } from './components/theatre/theatre.component';

import { CinemaService} from './services/cinema/cinema.service';
import { TheatreService} from './services/theatre/theatre.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    WelcomepageComponent,
    TheatreComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CinemaService, TheatreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
