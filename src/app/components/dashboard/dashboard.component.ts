import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private loggedin: LoggedinService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }


  logoutFun(): void{
    this.router.navigate(['../welcomepage']);
    this.loggedin.delLocalStore();
  }
}
