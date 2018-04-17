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

  getProjectionDate(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/projection/'+id);

  }

  getProjectionTerm(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/projectiondate/'+id);

  }

  getHall(id):Observable<any>{

    return this.http.get<any>('http://localhost:4567/hall/'+id);

  }

  reserveSeat(iduser, seat): Observable<any>{

    return this.http.post<any>('http://localhost:4567/seat/reserving/' + iduser +'/' + seat, seat, httpOptions);

}

  getProjectionterm(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/projectionterm/'+id);

  }

  getSeats(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/seat/getSeats/'+id);

  }

}
