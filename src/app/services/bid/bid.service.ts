import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BidService {

  constructor(private Http: HttpClient) { }


  getBids(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/bid/getBid/' + id);

  }

}
