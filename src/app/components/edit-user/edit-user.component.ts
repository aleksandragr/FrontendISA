import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  u: User;
  pass: any;
  newpp: any;
  currp: any;

  constructor(private loggedIn: LoggedinService,private userservice: UserService) { }

  ngOnInit() {

    var ua = this.loggedIn.getLocalStore();
    this.u=ua;
  }

  editUser(){
    this.loggedIn.delLocalStore();
    this.userservice.editUser(this.u)
    .subscribe(data =>{ this.u = data;       
    });
    this.loggedIn.setLocalStore(this.u);
    location.reload();
  }

  editPassword(){
    this.u.password=this.pass;
    this.u.newPassword=this.newpp;
    this.u.repeatPassword=this.currp;
    this.userservice.editPassword(this.u)
    .subscribe(data =>{ this.u = data;     
    });
    this.loggedIn.setLocalStore(this.u);
    
    
  }

}
