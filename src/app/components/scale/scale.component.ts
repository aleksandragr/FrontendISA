import { Component, OnInit } from '@angular/core';
import { AdminsystemService } from '../../services/adminsystem/adminsystem.service';
import { scale } from '../../scale';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent implements OnInit {

  newScale: any={};

  scale: scale;
  constructor(private adminSystemService: AdminsystemService) { }

  ngOnInit() {
  }

  addscalee(): void{

    this.adminSystemService.addScale(this.newScale)
    .subscribe(data => this.scale = data);

  }


}
