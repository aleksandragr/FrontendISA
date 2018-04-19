import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  u: User;
  pass: any;
  newpp: any;
  currp: any;

  constructor(private loggedin: LoggedinService,
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService
  ) { }

  ngOnInit() {

    var ua = this.loggedin.getLocalStore();
    this.user = ua;
    this.u = ua;
  }


  logoutFun(): void{
    this.router.navigate(['../welcomepage']);
    this.loggedin.delLocalStore();
  }


  editPassword(){
    this.u.password=this.pass;
    this.u.newPassword=this.newpp;
    this.u.repeatPassword=this.currp;
    this.userservice.editPassword(this.u)
    .subscribe(data =>{ this.u = data;     
    });
    this.loggedin.setLocalStore(this.u);
    
    
  }


}
