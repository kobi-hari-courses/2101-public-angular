import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader: boolean = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


  createObserver(id: number): Observer<number> {
      return {
        next: val => console.log(`observer ${id} next ${val}`), 
        complete: () => console.log(`observer ${id} completed`), 
        error: err => console.log(`observer ${id} error ${err}`)
      }
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable(observer => {
      observer.next(42);
      setTimeout(() => observer.next(100), 1000);
      setTimeout(() => observer.next(200), 3000);
      setTimeout(() => observer.next(300), 5000);
      setTimeout(() => observer.next(400), 8000);
      setTimeout(() => observer.complete(), 10000);
    });
  }

  createSubject(): Observable<number> {
    let subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 3000);
    setTimeout(() => subject.next(300), 5000);
    setTimeout(() => subject.next(400), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createBehaviorSubject(): Observable<number> {
    let subject = new BehaviorSubject<number>(42);

    setTimeout(() => subject.next(100), 1000);
    setTimeout(() => subject.next(200), 3000);
    setTimeout(() => subject.next(300), 5000);
    setTimeout(() => subject.next(400), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }


  go() {
    let observer1 = this.createObserver(1);
    let observer2 = this.createObserver(2);

    let observable = this.createBehaviorSubject();

    observable.subscribe(observer1);

    setTimeout(() => {
      observable.subscribe(observer2);
    }, 2500);
  }
}
