import { Component } from '@angular/core';
import { RandomizerService } from './services/randomizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private randomizer: RandomizerService){}

  createPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(42), 3000);
    })
  }

  go_old() {
    console.log('Starting');
    let p = this.createPromise();

    let q = p.then(res => {
      console.log('Promise completed with result ' + res);
      return 'Hello';
    });
  }

  async go() {
    console.log('A');

    await this.start();

    console.log('B');
  }

  async start() {
    console.log('1');

    for (let i = 0; i < 3; i++) {


      let p = this.randomizer.next(10, 20);

      console.log('2');
  
      let res = await p;  // }  p.then()
  
      console.log('res = ' + res);

    }
   return true;

  }

  async test1() {
    let res : number = 0;
    let promises: Promise<number>[] = [];

    console.time('Task');

    for (let i = 0; i < 10; i++) {
      promises.push(this.randomizer.next(10 * i, 10 * i + 10));
    }

    let promiseAll = Promise.race(promises);
    let resAll = await promiseAll;

    console.log(resAll);

    console.timeEnd('Task');

  }

  async test2() {
    let p1 = this.randomizer.next(10, 20);
    let p2 = this.randomizer.nextString(30, 40);

    let pall = Promise.race([p1, p2]);
    let res = await pall;
  }

}
