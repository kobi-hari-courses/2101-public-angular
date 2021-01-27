import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', 
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, keyword: unknown): string[] {
    if (!value) return [];

    if (typeof(keyword) !=='string') return value as string[];

    if (typeof(value) !== 'object') return [];

    if (value instanceof Array) {
      var strings = value
        .filter(i => typeof(i) === 'string') as string[];

      return strings.filter(str => str.includes(keyword));
    }

    return [];
  }

}
