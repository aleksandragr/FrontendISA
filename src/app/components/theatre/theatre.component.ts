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
  latitude = 44.787197;
  longitude = 20.457273;
  
  constructor(private theatreService: TheatreService) { }

  ngOnInit() {

    this.theatreService.getTheatres()
    .subscribe(theatres => this.theatres=theatres);

  }

}
