import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import {WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { CinemaService} from './services/cinema/cinema.service';


@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
