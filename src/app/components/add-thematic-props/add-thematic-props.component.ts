import { Component, OnInit } from '@angular/core';
import { ThematicpropsService } from '../../services/thematicprops/thematicprops.service';
import { thematicprops } from '../../thematicprops';
import { CinemaService } from '../../services/cinema/cinema.service';
import { Cinema } from '../../cinema';

@Component({
  selector: 'app-add-thematic-props',
  templateUrl: './add-thematic-props.component.html',
  styleUrls: ['./add-thematic-props.component.scss']
})
export class AddThematicPropsComponent implements OnInit {

  thematicprops: any = {};
  cinemasthematics: Cinema[];
  cinemaSelected: Cinema;
  selektovanId: any;

  constructor(private thematicpropsservice: ThematicpropsService,
      private cinemathematicSer: CinemaService
  ) { }

  ngOnInit() {

    this.cinemathematicSer.getCinemaTheatre()
    .subscribe(data => this.cinemasthematics = data
    );

  }


  addTProps(): void{
    console.log(this.thematicprops.cinemaTheatre);
  
    this.thematicpropsservice.addThematicProps(this.thematicprops)
    .subscribe(data => this.thematicprops = data);
  }


  selectChangeHandler (event : any){


    this.selektovanId =  event.target.value;
    
    this.cinemathematicSer.getCinemaTheatreOfId(this.selektovanId)
    .subscribe(data =>{ this.cinemaSelected = data;
      this.thematicprops.cinemaTheatre = this.cinemaSelected;
    });

    

    
    
  }


}
