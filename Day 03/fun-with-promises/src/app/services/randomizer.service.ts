import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async next(min: number, max: number): Promise<number> {
    console.log('starting random.next');
    let range = max - min;
    let rnd = Math.floor(range * Math.random()) + min;

    let delayTime = Math.random() * 3000 + 1000;

    await this.delay(delayTime);

    return rnd;
  }

  async nextString(min: number, max: number): Promise<string> {
    let num = await this.next(min, max);
    return 'Number: ' + num;
  }
}
