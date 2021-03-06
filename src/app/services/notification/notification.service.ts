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



  acceptBidNotification(noti,idann): Observable<any>{

    return this.http.put<any>('http://localhost:4567/notification/newNotification/' + idann, noti, httpOptions );

  }


  getNotificationOfUser(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/notification/getNotificationOfUser/' + id);

  }

  noAccepBid(id,ann,bi): Observable<any>{

    return this.http.get<any>('http://localhost:4567/notification/notAcceptBid/' + id + '/' + ann + '/' + bi);

  }


  getAnnForAdministrator(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/notification/getAnnForAdmin/' + id);

  }

}
