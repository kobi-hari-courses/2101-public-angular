import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Show } from './models/model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shows: Show[] = null;

  constructor(private data: DataService){}

  async getAll() {
    this.shows = await this.data.getAllShows();

  }
}
