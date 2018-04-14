import { Component, OnInit } from '@angular/core';
import { Repertory} from '../../repertory';
import { Projection} from '../../projection';
import { ProjectionsService} from '../../services/projections/projections.service';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent implements OnInit {

  repertory: Repertory;
  projections: Projection[];

  constructor(private projectionService: ProjectionsService) { }

  ngOnInit() {
    
  }

  

}
