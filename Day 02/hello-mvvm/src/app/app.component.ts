import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  // methods
  setKeyword(value: string) {
    console.log('setting keyword to ' + value);

    this.keyword = value;
  }

  search() {
    console.log('searching');
    this.isBusy = true;
    setTimeout(() => {
      this.isBusy = false;
      this.results = [
        this.keyword + '1', 
        this.keyword + '2', 
        this.keyword + '3'
      ];

    }, 3000);
  }

}
