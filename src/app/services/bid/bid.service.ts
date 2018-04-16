import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { bid } from '../../bid';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BidService {

  constructor(private Http: HttpClient) { }


  getBids(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/bid/getBid/' + id);

  }

  addBid(bid: bid): Observable<any>{

    return this.Http.put<any>('http://localhost:4567/bid/addBidOnAnnouncement', bid, httpOptions);

  }

  getBidOfUserAndAnnouncement(id,an): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/bid/getUserOfAnnoucement/' + id + '/' + an);

  }
}
