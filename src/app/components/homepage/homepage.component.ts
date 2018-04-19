import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';
import { Reservation } from '../../reservation';
import { ReservationService} from '../../services/reservation/reservation.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  u: User;
  reservationss: Reservation[];

  constructor(private loggedIn: LoggedinService,private reservationS: ReservationService) { }

  ngOnInit() {
    var ua = this.loggedIn.getLocalStore();
    this.u=ua;

    this.reservationS.getHistory(this.u.id)
    .subscribe(reser => this.reservationss=reser);
    console.log("iscitavam istoriju");
  }

}
