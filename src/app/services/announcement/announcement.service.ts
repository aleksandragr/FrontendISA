import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AnnouncementService {

  constructor(private Http: HttpClient) { }

  getAllAnnouncement(id): Observable<any>{

    return this.Http.post<any>('http://localhost:4567/announcement/getAllAnnouncements/' + id, id, httpOptions);

  }

  addAnnouncement(ann): Observable<any>{
    console.log("aaaaaaaaaaaa");
    return this.Http.put<any>('http://localhost:4567/announcement/addAnnouncement', ann, httpOptions);
  }


  getBidsOfAnnouncement(id): Observable<any>{
    
    return this.Http.get<any>('http://localhost:4567/announcement/getBidOfAnnouncement/' + id);

  }

  getAnnouncementOfId(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/announcement/getAnnouncement/' + id);

  }

  getAnnOfUser(id): Observable<any>{

    return this.Http.get<any>('http://localhost:4567/announcement/getAnnauncementsOfUser/' + id);

  }
}
