import { Component, OnInit } from '@angular/core';
import { ThematicpropsService } from '../../services/thematicprops/thematicprops.service';
import { thematicprops } from '../../thematicprops';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';

@Component({
  selector: 'app-officialstore',
  templateUrl: './officialstore.component.html',
  styleUrls: ['./officialstore.component.scss']
})
export class OfficialstoreComponent implements OnInit {

  constructor(private thematicpropsService: ThematicpropsService,
    private loggedIn: LoggedinService
  ) { }

  props: thematicprops[];
  propid: thematicprops;
  reservedProp: thematicprops;
  id: any;
  u: User;
  


  ngOnInit() {

    this.thematicpropsService.getThematicProps()
      .subscribe(props => this.props = props);

  }

  getPropsOfId(id1): void{
   
    this.thematicpropsService.getThematicPofId(id1)
    .subscribe(prop =>{ this.propid = prop;
              console.log(prop);
            }
    );
  }
  

  reservingProps(prop): void{
    var ua = this.loggedIn.getLocalStore();
    
    this.thematicpropsService.reserveProps(ua.id,prop)
    .subscribe(data => this.reservedProp = data);


  }






}
