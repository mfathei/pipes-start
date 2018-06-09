import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // this is dangerous
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any, propName: string): any {
    if (value === null || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
