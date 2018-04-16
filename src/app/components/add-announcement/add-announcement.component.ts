import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { announcement } from '../../announcement';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  ann: any = {};
  announcement: announcement;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
  }

  addannouncement(){
    console.log(this.ann.name);
    console.log(this.ann.date);
    this.announcementService.addAnnouncement(this.ann)
    .subscribe(data => this.announcement = data);

  }


}
