import { Component, OnInit } from '@angular/core';
import { AdminsystemService } from '../../services/adminsystem/adminsystem.service';
import { Cinema } from '../../cinema';
import { User } from '../../user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-adminsystem',
  templateUrl: './adminsystem.component.html',
  styleUrls: ['./adminsystem.component.scss']
})
export class AdminsystemComponent implements OnInit {

  newCinemaTheatre: any={};
  cinematheatre: Cinema;

  newPersone: any={};
  user: User;
  selektovanId: any;
  adminsOfCinema: User[];
  administrator: User;
  
  latitude = 44.786568;
  longitude = 20.4489216;

  constructor(private adminsystemaService: AdminsystemService,
          private userService: UserService
  ) { }

  ngOnInit() {

    this.adminsystemaService.getAdminsOfCinemaT()
    .subscribe(data => this.adminsOfCinema = data);
  }


  addCinemaT(): void{

    this.adminsystemaService.addCinemaTheatre(this.newCinemaTheatre)
    .subscribe(data => this.cinematheatre = data);

  }

  addP(): void{

    this.adminsystemaService.addPersone(this.newPersone)
    .subscribe(data => this.user = data);

  }

  
  selectChangeHandler (event : any){


    this.selektovanId =  event.target.value;
    
    this.userService.getUserOfId(this.selektovanId)
    .subscribe(data =>{ this.administrator = data;
      this.newCinemaTheatre.admin = this.administrator;
      console.log("aaaaaaaaaaa " + this.newCinemaTheatre.admin.id);
    });
    
  
  }

  OnChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;

  }
  
 

}
