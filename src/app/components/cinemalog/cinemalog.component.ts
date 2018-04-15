import { Component, OnInit } from '@angular/core';

import { CinemaService} from '../../services/cinema/cinema.service';
import { Cinema } from '../../cinema';
import { Repertory} from '../../repertory';
import { Projection} from '../../projection';
import { ProjectionsService} from '../../services/projections/projections.service';
import { Projectiondate } from '../../projectiondate';
import { Projectionterm } from '../../projectionterm';

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
  selectedItem: any;
  projectiondate: Projectiondate;
  projectionterms: Projectionterm[];
  selectedItem2: any;
  selectedItem3:any;
  hall:any;
  

  constructor(private cinemaService: CinemaService, private projectionService: ProjectionsService) { }

  ngOnInit() {

    this.cinemaService.getCinemas()
    .subscribe(cinemas =>this.cinemas=cinemas);

    
  }

  getProjections(id): void{
    this.projectionService.getRepertory(id)
    .subscribe(repertory => {this.repertory=repertory;
    this.projections = repertory.projections;
      
    this.projectiondates=[];
    this.projectionterms=[];
    this.hall="";

    });
    
  }


  getProjectionDates(): void{
    this.projectionService.getProjectionDate(this.selectedItem)
    .subscribe(projection => {this.projection=projection;
    this.projectiondates=this.projection.projectionDates;
    });

    
  }

  selectChangeHandler(event:any){
    this.selectedItem = event.target.value;
    this.projectionterms=[];
    this.hall="";
    this.getProjectionDates();
  }

  getProjectionTerms(): void{
    this.projectionService.getProjectionTerm(this.selectedItem2)
    .subscribe(projectiondate => {this.projectiondate=projectiondate;
    this.projectionterms=this.projectiondate.projectionTerms;
    });
  }

  selectChangeHandler2(event:any){
    this.selectedItem2 = event.target.value;
    this.hall="";
    this.getProjectionTerms();
  }

  selectChangeHandler3(event:any){
    this.selectedItem3=event.target.value;
    console.log(this.selectedItem3);
    this.hall=this.selectedItem3;
  }


}
