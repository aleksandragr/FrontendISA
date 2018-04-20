import { Component, OnInit } from '@angular/core';
import { AdminsystemService } from '../../services/adminsystem/adminsystem.service';
import { scale } from '../../scale';
import { UserService } from '../../services/user/user.service';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { User } from '../../user';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  newScale: any={};
  u: User;
  scale: scale;
  golddd: any;
  silverrr: any;
  bronzeee: any;
  scalevr: scale;
  constructor(private adminSystemService: AdminsystemService,
        private loggedin: LoggedinService
  ) { }

  ngOnInit() {
    var ua = this.loggedin.getLocalStore();
    this.u = ua;

    this.adminSystemService.getScale(1)
    .subscribe(data => {this.scalevr = data;
      this.golddd = this.scalevr.gold;
      this.silverrr = this.scalevr.silver;
      this.bronzeee = this.scalevr.bronze;
    });
  }

  addscalee(): void{

    this.adminSystemService.addScale(this.newScale)
    .subscribe(data => this.scale = data);
    
  }

 

}
