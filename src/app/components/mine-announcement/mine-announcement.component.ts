import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';
import { announcement } from '../../announcement';
import { bid } from '../../bid';

@Component({
  selector: 'app-mine-announcement',
  templateUrl: './mine-announcement.component.html',
  styleUrls: ['./mine-announcement.component.scss']
})
export class MineAnnouncementComponent implements OnInit {

  user: User;
  bids: bid[];

  announcements: announcement[];
  constructor(private announcementService: AnnouncementService,
      private loggedinService: LoggedinService
  ) { }

  ngOnInit() {
    
    var u = this.loggedinService.getLocalStore();
    this.user = u;

    this.announcementService.getAnnOfUser(this.user.id)
    .subscribe(data => this.announcements = data);
  
  
  }

  getBidsOfAnn(id): void{
    this.bids = [];
    this.announcementService.getBidsOfAnnouncement(id)
    .subscribe(data => this.bids = data);

  }

}
