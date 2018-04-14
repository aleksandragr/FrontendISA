import { Component, OnInit } from '@angular/core';
import { ThematicpropsService } from '../../services/thematicprops/thematicprops.service';
import { thematicprops } from '../../thematicprops';

@Component({
  selector: 'app-add-thematic-props',
  templateUrl: './add-thematic-props.component.html',
  styleUrls: ['./add-thematic-props.component.scss']
})
export class AddThematicPropsComponent implements OnInit {

  thematicprops: any = {};

  constructor(private thematicpropsservice: ThematicpropsService) { }

  ngOnInit() {
  }


  addTProps(): void{

    this.thematicpropsservice.addThematicProps(this.thematicprops)
    .subscribe(data => this.thematicprops = data);
  }

}
