import { Component, OnInit } from '@angular/core';
import { ThematicpropsService } from '../../services/thematicprops/thematicprops.service';
import { thematicprops } from '../../thematicprops';
import { CinemaService } from '../../services/cinema/cinema.service';
import { Cinema } from '../../cinema';

@Component({
  selector: 'app-edit-thematic-props',
  templateUrl: './edit-thematic-props.component.html',
  styleUrls: ['./edit-thematic-props.component.scss']
})
export class EditThematicPropsComponent implements OnInit {

  newThematicProps: any = {};
  thematicProps: thematicprops[];
 
  cienmaTheatree: Cinema[];
  cinemaSelected: Cinema;
  selektovanId: any;

  constructor(private thematicpropsservice: ThematicpropsService,
            private cinemaService: CinemaService
  ) { }

  ngOnInit() {

    this.thematicpropsservice.getThematicProps()
    .subscribe(data => this.thematicProps = data);

    
    this.cinemaService.getCinemaTheatre()
    .subscribe(data => this.cienmaTheatree = data);
  }


  selectChangeHandler (event : any){


    this.selektovanId =  event.target.value;
    
    this.cinemaService.getCinemaTheatreOfId(this.selektovanId)
    .subscribe(data =>{ this.cinemaSelected = data;
      this.newThematicProps.cinemaTheatre = this.cinemaSelected;
    });
  
  
  }


  getThematicProps(id){

    this.thematicpropsservice.getThematicPofId(id)
    .subscribe(data => this.newThematicProps = data);

  }

  editProps(){
    console.log("ovaj bioskop salje " + this.newThematicProps.cinemaTheatre.name);
    this.thematicpropsservice.editThematicProps(this.newThematicProps)
    .subscribe(data => this.newThematicProps = data);

  }

}
