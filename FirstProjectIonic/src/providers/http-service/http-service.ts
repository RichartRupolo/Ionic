import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  API_URL = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  get(endpoint: string) {
    return this.http.get<Observable<any>>(`${this.API_URL}/${endpoint}`);
  }

  getById(endpoint: string) {
    return this.http.get<any>(`${this.API_URL}/${endpoint}`);
  }

  post(endpoint: string, data: object) {
    return this.http.post(`${this.API_URL}/${endpoint}`, data);
  }

  put(endpoint: string, data: object) {
    return this.http.put(`${this.API_URL}/${endpoint}`, data);
  }

  delete(endpoint: string) {
    return this.http.delete(`${this.API_URL}/${endpoint}`);  
  }
}
