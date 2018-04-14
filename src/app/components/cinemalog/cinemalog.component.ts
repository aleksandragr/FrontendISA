import { Component, OnInit } from '@angular/core';

import { CinemaService} from '../../services/cinema/cinema.service';
import { Cinema } from '../../cinema';
import { Repertory} from '../../repertory';
import { Projection} from '../../projection';
import { ProjectionsService} from '../../services/projections/projections.service';
import { Projectiondate } from '../../projectiondate';

@Component({
  selector: 'app-cinemalog',
  templateUrl: './cinemalog.component.html',
  styleUrls: ['./cinemalog.component.scss']
})
export class CinemalogComponent implements OnInit {

  cinemas: Cinema[];
  repertory: Repertory;
  projections: Projection[];
  projection: Projection;
  projectiondates: Projectiondate[];
  

  constructor(private cinemaService: CinemaService, private projectionService: ProjectionsService) { }

  ngOnInit() {

    this.cinemaService.getCinemas()
    .subscribe(cinemas =>this.cinemas=cinemas);

    
  }

  getProjections(id): void{
    this.projectionService.getRepertory(id)
    .subscribe(repertory => {this.repertory=repertory;
      this.projections = repertory.projections;
      
    });
    
  }


  getProjectionDates(): void{
    console.log("aloooooo");
    this.projectionService.getProjectionDate()
    .subscribe(projection => {this.projection=projection;
    console.log(this.projection.projectionDates);
    this.projectiondates=this.projection.projectionDates;
    console.log(this.projectiondates);
    });
  }

}
