import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { thematicprops } from '../../thematicprops';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ThematicpropsService {

  constructor(private http: HttpClient) { }

  getThematicProps(): Observable<any>{

    return this.http.get<any>('http://localhost:4567/thematicProps/getAllThematicP');

  }

  getThematicPofId(id): Observable<any>{

    return this.http.get<any>('http://localhost:4567/thematicProps/getThematicP/' + id);

  }

  reserveProps(iduser, props): Observable<any>{

      return this.http.post<any>('http://localhost:4567/thematicProps/reserving/' + iduser +'/' + props, props, httpOptions);

  }

  addThematicProps(props: thematicprops): Observable<any>{

    return this.http.put<any>('http://localhost:4567/thematicProps/addThematicP', props, httpOptions);

  }

}
