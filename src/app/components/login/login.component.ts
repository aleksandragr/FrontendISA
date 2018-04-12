import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../user';

import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinService } from '../../services/loggedin/loggedin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  userl: any = {};

  constructor(private userservice: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private loggedin: LoggedinService
    ) { }

  ngOnInit() {
  }


  login(): void{
    
    this.userservice.loginUser(this.userl)
    .subscribe(user => { this.userl = user;
             this.router.navigate(['/dashboard']);
             this.loggedin.setLocalStore(user);

              },
              error => {
                console.log("neispravna lozinka");
              }
          
          );

  }

  
}
