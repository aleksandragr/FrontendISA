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
  latitude = 51.678418;
  longitude = 7.809007;
  
  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    
      this.cinemaService.getCinemas()
      .subscribe(cinemas =>this.cinemas=cinemas);
    
  }

  

  

}
