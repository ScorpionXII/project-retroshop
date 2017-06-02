import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items)
      return [];

    if (!value)
      return items;

    const testCase = new RegExp(value,'i');
    return items.filter(item => item[field].match(testCase));
  }

}
