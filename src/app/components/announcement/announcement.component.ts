import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { announcement } from '../../announcement';
import { bid } from '../../bid';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements: announcement[];
  bids: bid[];
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
  
    this.announcementService.getAllAnnouncement()
    .subscribe(data => this.announcements = data );

  }


  getBidsOfAnn(id): void{

    this.announcementService.getBidsOfAnnouncement(id)
    .subscribe(data => this.bids = data);

  }


}
