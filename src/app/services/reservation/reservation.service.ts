import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }


  getReservation(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/reservation/getReservations/'+id);

  }
}
