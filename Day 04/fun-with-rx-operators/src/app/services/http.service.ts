import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get('http://api.tvmaze.com/shows/1').toPromise();
  }
}
