import { Component, OnInit } from '@angular/core';
import { ThematicpropsService } from '../../services/thematicprops/thematicprops.service';
import { thematicprops } from '../../thematicprops';

@Component({
  selector: 'app-officialstore',
  templateUrl: './officialstore.component.html',
  styleUrls: ['./officialstore.component.scss']
})
export class OfficialstoreComponent implements OnInit {

  constructor(private thematicpropsService: ThematicpropsService) { }

  props: thematicprops[];

  ngOnInit() {

    this.thematicpropsService.getThematicProps()
      .subscribe(props => this.props = props);

  }






}
