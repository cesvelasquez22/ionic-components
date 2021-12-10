import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe<T> implements PipeTransform {
  transform(items: T[], ...args: any[]): T[] {
    if (args[0] === '') {
      return [];
    }

    if (!items) {
      return;
    }

    const search = args[0].toLocaleLowerCase();
    const propToSearch = args[1].toLowerCase();

    return items.filter((item) => item[propToSearch].toLowerCase().includes(search));
  }
}
