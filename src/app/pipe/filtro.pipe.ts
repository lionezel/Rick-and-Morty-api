import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, page: number = 0, search: string = ''): any {
    if (search.length == 0) return value.slice(page, page + 20);

    const filteredApi = value.filter((results: any) =>
      results.name.includes(search)
    );
    return filteredApi.slice(page, page + 5);
  }
}
