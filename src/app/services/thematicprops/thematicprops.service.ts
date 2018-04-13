import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { thematicprops } from '../../thematicprops';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ThematicpropsService {

  constructor(private http: HttpClient) { }

  getThematicProps(): Observable<any>{

    return this.http.get<any>('http://localhost:4567/thematicProps/getAllThematicP');

  }


}
