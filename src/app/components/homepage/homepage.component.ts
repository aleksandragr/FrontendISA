import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  u: User;
  

  constructor(private loggedIn: LoggedinService) { }

  ngOnInit() {
    var ua = this.loggedIn.getLocalStore();
    this.u=ua;
  }

}
