import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now$ = interval(1000).pipe(map(_ => Date.now()));

  title = 'Hello world';

  words = [
    'green', 
    'orange', 
    'red', 
    'blue'
  ];

  modifyArray() {
    this.words[1] = 'beer';
    this.words.push('peer');
  }

}

