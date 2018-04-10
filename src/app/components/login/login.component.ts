import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userl: any = {};

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }


  login(): void{
    
    this.userservice.loginUser(this.userl)
    .subscribe(user => this.userl = user);

  }

  
}
