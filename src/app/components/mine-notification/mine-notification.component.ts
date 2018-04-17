import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { notification } from '../../notification';
import { User } from '../../user';
import { LoggedinService } from '../../services/loggedin/loggedin.service';

@Component({
  selector: 'app-mine-notification',
  templateUrl: './mine-notification.component.html',
  styleUrls: ['./mine-notification.component.scss']
})
export class MineNotificationComponent implements OnInit {

  notifications: notification[];
  user: User;

  constructor(private notificationService: NotificationService,
          private loggedinService: LoggedinService
  ) { }

  ngOnInit() {
    
    var u = this.loggedinService.getLocalStore();
    this.user = u;

    this.notificationService.getNotificationOfUser(this.user.id)
    .subscribe(data => this.notifications = data);
  
  }




}
