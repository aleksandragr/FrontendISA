import { Component, OnInit } from '@angular/core';

import { Theatre } from '../../theatre';
import { TheatreService } from '../../services/theatre/theatre.service';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit {

  theatres: Theatre[];
  latitude = 51.678418;
  longitude = 7.809007;
  
  constructor(private theatreService: TheatreService) { }

  ngOnInit() {

    this.theatreService.getTheatres()
    .subscribe(theatres => this.theatres=theatres);

  }

}
