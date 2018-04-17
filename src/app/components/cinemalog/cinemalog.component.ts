import { Component, OnInit } from '@angular/core';

import { CinemaService} from '../../services/cinema/cinema.service';
import { Cinema } from '../../cinema';
import { Repertory} from '../../repertory';
import { Projection} from '../../projection';
import { ProjectionsService} from '../../services/projections/projections.service';
import { Projectiondate } from '../../projectiondate';
import { Projectionterm } from '../../projectionterm';
import { Hall } from '../../hall';
import { Seat } from '../../seat';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { NgIf } from '@angular/common';


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
  projectionterm: Projectionterm;
  hall:any = {};
  price: any;
  halll: any;
  seats:Seat[];
  seatss:Seat[];
  reservedSeat: Seat;
  
  
  

  constructor(private cinemaService: CinemaService, private projectionService: ProjectionsService,private loggedIn: LoggedinService) { }

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
    this.seats=[];
    this.halll="";
    this.price="";
    this.seatss=[];

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
    this.seats=[];
    this.halll="";
    this.price="";
    this.seatss=[];
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
    this.seats=[];
    this.halll="";
    this.price="";
    this.seatss=[];
    this.getProjectionTerms();
  }

  getHall(): void{
    this.projectionService.getHall(this.projectionterm.hall.id)
    .subscribe(hall1 => {this.hall=hall1;
    console.log(this.hall.id);
    this.seats=this.hall.seats;
    
    });
  }

  getProjectionterm(): void{
    this.projectionService.getProjectionterm(this.selectedItem3)
    .subscribe(ptt => {this.projectionterm=ptt;
    this.price=this.projectionterm.price;
    this.halll=this.projectionterm.hall.ordinal;
    
    });
  }

  selectChangeHandler3(event:any){
    this.selectedItem3=event.target.value;
    console.log(this.selectedItem3);
    this.halll="";
    this.price="";
    this.seatss=[];
    this.getProjectionterm();
    this.getSeats();
  }

  getSeats(): void{
    this.projectionService.getSeats(this.selectedItem3)
    .subscribe(ss => {this.seatss=ss})
    
  }

  reservingSeat(seat): void{
    var ua = this.loggedIn.getLocalStore();
    
    this.projectionService.reserveSeat(ua.id,seat)
    .subscribe(data => this.reservedSeat = data);


  }


}
