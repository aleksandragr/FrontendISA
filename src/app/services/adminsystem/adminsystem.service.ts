import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AdminsystemService {

  constructor(private Http: HttpClient) { }


  addCinemaTheatre(ct): Observable<any>{

    return this.Http.put<any>('http://localhost:4567/cinematheatre/addCinemaTheatre', ct, httpOptions);

  }

  addPersone(user): Observable<any>{
    
    return this.Http.put<any>('http://localhost:4567/user/addAdmin', user, httpOptions);

  }

  getAdminsOfCinemaT(): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/user/getAdminsOfCinemaT');

  }

  addScale(scale): Observable<any>{

    return this.Http.put<any>('http://localhost:4567/scaleprople/addscaleprople', scale, httpOptions);

  }
 
  getScale(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/scaleprople/getScale/' + id);

  }
}
