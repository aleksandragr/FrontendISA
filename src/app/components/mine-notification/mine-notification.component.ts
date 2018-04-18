import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { notification } from '../../notification';
import { User } from '../../user';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { announcement } from '../../announcement';

@Component({
  selector: 'app-mine-notification',
  templateUrl: './mine-notification.component.html',
  styleUrls: ['./mine-notification.component.scss']
})
export class MineNotificationComponent implements OnInit {

  notifications: notification[];
  adminNotifications: notification[];
  user: User;
  announcement: announcement;
  annDescription: string;
  ann: any={};
  idAnn: any;

  constructor(private notificationService: NotificationService,
          private loggedinService: LoggedinService,
          private announcementService: AnnouncementService
  ) { }

  ngOnInit() {
    
    var u = this.loggedinService.getLocalStore();
    this.user = u;

    this.notificationService.getNotificationOfUser(this.user.id)
    .subscribe(data => this.notifications = data);
  

    this.notificationService.getAnnForAdministrator(this.user.id)
    .subscribe(data => this.adminNotifications = data);

  }


  adminPreuzimaOglasNaSebe(ann,a): void{
    this.idAnn = a.id;
    this.ann.name = a.name;
    this.ann.description = a.description;
    this.ann.date = a.date;
    this.ann.ime = "Name: ";
    this.ann.opis = "Description: ";
    this.ann.datum = "Date: ";


    this.announcementService.annOnAdmin(this.user.id,ann)
    .subscribe(data => this.announcement = data);


  }


  approveAnnouncement(): void{

    this.announcementService.approveAnn(this.idAnn)
    .subscribe(data => this.announcement = data);
  }

}
