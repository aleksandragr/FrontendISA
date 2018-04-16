import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userr: any = {};

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  register(): void {

    this.userService.registerUser(this.userr).
    subscribe(user => { this.userr = user;
      this.router.navigate(['/login']);
      

       });

  }

}
