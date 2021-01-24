import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  async getAllShows() {
    return await this.http
      .get<Show[]>('https://api.tvmaze.com/shows')
      .toPromise();
  }
}
