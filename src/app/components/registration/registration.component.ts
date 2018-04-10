import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userr: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register(): void {

    this.userService.registerUser(this.userr).
    subscribe(user => this.userr=user);

  }

}
