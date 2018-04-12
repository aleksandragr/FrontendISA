import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable()
export class LoggedinService {

  constructor(private localStorage: LocalStorageService){}

  setLocalStore(u){
    this.localStorage.store("logged in",JSON.stringify(u));
  }

  getLocalStore(){
    alert(this.localStorage.retrieve('logged in'));
  }

  delLocalStore(): void{
    this.localStorage.clear('boundValue');
  }


}


