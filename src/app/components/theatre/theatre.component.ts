import { Component, OnInit } from '@angular/core';

import { Theatre } from '../../theatre';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit {

  theatres: Theatre[];

  constructor() { }

  ngOnInit() {
  }

}
