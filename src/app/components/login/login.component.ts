import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../user';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userl: any = {};

  constructor(private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }


  login(): void{
    
    this.userservice.loginUser(this.userl)
    .subscribe(user => { this.userl = user;
             this.router.navigate(['/dashboard']);
              },
              error => {

                console.log("neispravna lozinka");
              }
          
          );

  }

  
}
