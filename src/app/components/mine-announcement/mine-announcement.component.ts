import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';
import { announcement } from '../../announcement';
import { bid } from '../../bid';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-mine-announcement',
  templateUrl: './mine-announcement.component.html',
  styleUrls: ['./mine-announcement.component.scss']
})
export class MineAnnouncementComponent implements OnInit {

  user: User;
  bids: bid[];
  notification: Notification;
  notisend: any={};
  nazivOglasa: string;
  notiNoAccept: any={};
  idOfAnn: any;
  notifications: Notification[];

  announcements: announcement[];
  constructor(private announcementService: AnnouncementService,
      private loggedinService: LoggedinService,
      private notificationService: NotificationService
  ) { }

  ngOnInit() {
    
    var u = this.loggedinService.getLocalStore();
    this.user = u;

    this.announcementService.getAnnOfUser(this.user.id)
    .subscribe(data => this.announcements = data);
  
  
  }

  getBidsOfAnn(id,name,idAnn): void{
    this.bids = [];
    this.nazivOglasa = name;
    this.idOfAnn = idAnn;
    this.announcementService.getBidsOfAnnouncement(id)
    .subscribe(data => this.bids = data);

  }


  acceptBidNoti(user2): void{

    this.notisend.userone = this.user;
    this.notisend.description = "Your offer on announcement '" + this.nazivOglasa + "' is accepted!";
    this.notisend.usertwo = user2;

    this.notificationService.acceptBidNotification(this.notisend)
    .subscribe(data => this.notification = data);
    
  }

  notAcceptBid(bidid): void{


    this.notificationService.noAccepBid(this.user.id,this.idOfAnn,bidid)
    .subscribe(data => this.notifications = data);



  }


  




}
