import { Component, OnInit } from '@angular/core';
import { ReservationService} from '../../services/reservation/reservation.service';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';
import { Reservation } from '../../reservation';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  u: User;
  reservations: Reservation[];
  reservation: Reservation;
  reservationF: Reservation;
  users: User[];
  idR: any;
  
  constructor(private reservationS: ReservationService,private loggedIn: LoggedinService) { }

  ngOnInit() {
    
    var ua = this.loggedIn.getLocalStore();
    this.u=ua;
    this.reservationS.getReservation(this.u.id)
    .subscribe(reser => this.reservations=reser);
  
  }

  deleteReser(id){
    this.reservationS.removeReservation(id)
    .subscribe(res => this.reservation=res);
    location.reload();
  }

  inviteFriends(id){
    console.log("aaa"+id);
    this.reservationS.getInviteFr(this.idR,id)
    .subscribe(res => this.reservationF=res);
    
  }

  getUsers(reserv){
    this.reservationS.getUsersFromU(this.u.id)
    .subscribe(users => this.users=users);
    this.idR=reserv;
    console.log(this.idR);
  }

}
