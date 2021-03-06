import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:4000';

  constructor(private _http: HttpClient) { }

  // get data values
  getTypeRequest(url: any) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res
    }));
  }


  // post to data values
  postTypeRequest(url: string, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url: any, payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }


}
