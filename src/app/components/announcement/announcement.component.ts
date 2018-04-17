import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { announcement } from '../../announcement';
import { bid } from '../../bid';
import { User } from '../../user';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { BidService } from '../../services/bid/bid.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements: announcement[];
  bids: bid[];
  user: User;
  annOfId: any={};
  bid: any={};
  offered: any;
  bidOfUsera: bid;

  constructor(private announcementService: AnnouncementService,
        private loggedin: LoggedinService,
        private bidService: BidService
  ) { }

  ngOnInit() {
  
    var u = this.loggedin.getLocalStore();
    this.user = u;

    this.announcementService.getAllAnnouncement(this.user.id)
    .subscribe(data => this.announcements = data );

   
  }


  getBidsOfAnn(id): void{
    this.bids = [];
    this.announcementService.getBidsOfAnnouncement(id)
    .subscribe(data => this.bids = data);

  }


  getAnnOfId(id): void{

    

    this.announcementService.getAnnouncementOfId(id)
    .subscribe(data => this.annOfId = data);

  }

  addBidOnAnnouncement(): void{
    this.bid.user = this.user;
    this.bid.announcement = this.annOfId;
    this.bid.offered = this.offered;

    this.bidService.addBid(this.bid)
    .subscribe(data => this.bid = data);
    location.reload();

  }


  getBidOfuserAndannouncement(an){
    this.offered = "";
    this.bidService.getBidOfUserAndAnnouncement(this.user.id,an )
    .subscribe(data =>{ this.bidOfUsera  = data;
      
      this.offered = this.bidOfUsera.offered;
    
    
    });

  }


}
