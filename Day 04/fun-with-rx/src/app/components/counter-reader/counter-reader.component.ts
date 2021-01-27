import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterReaderComponent implements OnInit {
  counterValue$: Observable<number>;

  alternativeValue$ = new BehaviorSubject<number>(0);

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.counterValue$ = this.counterService.getValue().pipe(
      tap(val => {
        console.log('next value ' + val);
      })
    )

    setTimeout(() => {
      this.alternativeValue$.next(10);
      console.log('I am now changing the alternative value');
    }, 5000)
  }

  
}
