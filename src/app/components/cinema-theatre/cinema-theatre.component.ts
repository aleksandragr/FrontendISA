import { Component, OnInit } from '@angular/core';

import { CinemaTheatreService} from '../../services/cinema-theatre/cinema-theatre.service';
import { CinemaTheatre } from '../../cinema-theatre';


@Component({
  selector: 'app-cinema-theatre',
  templateUrl: './cinema-theatre.component.html',
  styleUrls: ['./cinema-theatre.component.scss']
})
export class CinemaTheatreComponent implements OnInit {

  cinemas: CinemaTheatre[];

  
  constructor(private cinematheatreService: CinemaTheatreService) { }

  ngOnInit() {
    
      this.cinematheatreService.getCinemas()
      .subscribe(cinemas =>this.cinemas=cinemas);
    
  }

  

  

}
