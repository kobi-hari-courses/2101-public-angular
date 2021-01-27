import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { NameSearchService } from './services/name-search.service';
import { debounceTime, map, mapTo, mergeAll, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search$ = new Subject<string>();
  results$: Observable<string[]>;
  isBusy$: Observable<boolean>;

  res$: Promise<Object>;

  constructor(
    private searchService: NameSearchService, 
    private httpService: HttpService
    ) {
  }

  ngOnInit(): void {
    this.results$ = this.search$.pipe(
      debounceTime(500),
      switchMap(keyword => this.searchService.searchNames(keyword)), 
    );

      let true$ = this.search$.pipe(mapTo(true));
      let false$ = this.results$.pipe(mapTo(false));
      this.isBusy$ = merge(true$, false$);

  }

  onKeywordChanged(currentKeyword: string) {
    this.search$.next(currentKeyword);
  }

  tryHttp() {
    this.res$ = this.httpService.getSomeData();
  }
}
