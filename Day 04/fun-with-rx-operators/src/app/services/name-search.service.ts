import { Injectable } from '@angular/core';
import { ALL_NAMES } from './all-names';

@Injectable({
  providedIn: 'root'
})
export class NameSearchService {

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async searchNames(keyword: string): Promise<string[]> {
    if (!keyword) return [];
    console.log('starting search for ' + keyword);

    await this.delay(3000);

    keyword = keyword.toLowerCase();

    let res = ALL_NAMES.filter(name => name.toLowerCase().includes(keyword));

    console.log('completed search for ' + keyword);
    return res;
  }

  cheatSearchNames(keyword: string): string[] {
    if (!keyword) return [];
    console.log('starting search for ' + keyword);

    keyword = keyword.toLowerCase();

    let res = ALL_NAMES.filter(name => name.toLowerCase().includes(keyword));

    console.log('completed search for ' + keyword);
    return res;
  }

}
