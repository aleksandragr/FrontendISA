import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projection } from '../../projection';
import { Projectiondate } from '../../projectiondate';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectionsService {

  constructor(private http: HttpClient) { }

  getRepertory (id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/cinematheatre/getRepertory/'+id);

  }

  getProjectionDate(): Observable<any>{

    return this.http.get<any>('http://localhost:4567/projection/2');

  }

}
