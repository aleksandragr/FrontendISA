import { Injectable } from '@angular/core';
import { User } from '../../user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  loginUser (user: User): Observable<any>{
    
    return this.http.post<any>('http://localhost:4567/user/logIn', user, httpOptions);

  }



}
