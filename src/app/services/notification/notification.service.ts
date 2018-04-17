import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NotificationService {

  constructor(private http: HttpClient) { }



  acceptBidNotification(noti): Observable<any>{

    return this.http.put<any>('http://localhost:4567/notification/newNotification', noti, httpOptions );

  }


  getNotificationOfUser(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/notification/getNotificationOfUser/' + id);

  }


}
