import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchValue: string): any[] {
    if (!value || searchValue === '') {
      return value;
    }
    const regexp = new RegExp(searchValue.trim(), 'i');
    const properties = Object.keys(value[0]);
    return [
      ...value.filter((item) => {
        return properties.some((property) => regexp.test(item[property]));
      }),
    ];
  }
}
