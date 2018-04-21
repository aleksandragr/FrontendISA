import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class FriendshipService {

  constructor(private Http: HttpClient) { }


  getRequests(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/friendship/getFriendRequest/' + id);

  }


  acceptRequest(id): Observable<any>{

    return this.Http.post<any>('http://localhost:4567/friendship/acceptRequest/' + id,id,httpOptions);

  }

  declineRequest(id): Observable<any>{

    return this.Http.post<any>('http://localhost:4567/friendship/declineRequest/' + id,id,httpOptions);

  }

  getFriends(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/friendship/getFriend/' + id);

  }
}
