import { Component, OnInit } from '@angular/core';
import { AdminsystemService } from '../../services/adminsystem/adminsystem.service';
import { Cinema } from '../../cinema';
import { User } from '../../user';

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
  constructor(private adminsystemaService: AdminsystemService) { }

  ngOnInit() {

  }


  addCinemaT(): void{

    this.adminsystemaService.addCinemaTheatre(this.newCinemaTheatre)
    .subscribe(data => this.cinematheatre = data);

  }

  addP(): void{

    this.adminsystemaService.addPersone(this.newPersone)
    .subscribe(data => this.user = data);

  }



  
 

}
