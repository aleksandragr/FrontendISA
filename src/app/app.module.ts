import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CinemaTheatreComponent } from './components/cinema-theatre/cinema-theatre.component';
import { CinemaTheatreService} from './services/cinema-theatre/cinema-theatre.service';

@NgModule({
  declarations: [
    AppComponent,
    CinemaTheatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CinemaTheatreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
