import { Component, OnInit } from '@angular/core';

import { CinemaService} from '../../services/cinema/cinema.service';
import { Cinema } from '../../cinema';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  cinemas: Cinema[];
  latitude = 44.787197;
  longitude = 20.457273;
  
  ciname1: Cinema;
  
  lat: any=[];
  long: any=[];
  
  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    
      this.cinemaService.getCinemas()
      .subscribe(cinemas =>{this.cinemas=cinemas;
        this.ciname1 = this.cinemas[2];
        this.lat = this.ciname1.latitude;
        this.long = this.ciname1.longitude;
      });
     
  }

  

  

}
