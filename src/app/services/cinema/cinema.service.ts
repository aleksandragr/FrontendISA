import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cinema } from '../../cinema';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CinemaService {

  constructor(private http: HttpClient) { }


  getCinemas (): Observable<any>{

    return this.http.get<any>('http://localhost:4567/cinematheatre/getCinemas');

  }




}
