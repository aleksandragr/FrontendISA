import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { announcement } from '../../announcement';
import { LoggedinService } from '../../services/loggedin/loggedin.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  ann: any = {};
  announcement: announcement;

  constructor(private announcementService: AnnouncementService,
      private loggedinService: LoggedinService
  ) { }

  ngOnInit() {
  }

  addannouncement(){
  
    var u = this.loggedinService.getLocalStore();
    this.ann.user = u;
    console.log(this.ann.user);
    this.announcementService.addAnnouncement(this.ann)
    .subscribe(data => this.announcement = data);

  }


}


