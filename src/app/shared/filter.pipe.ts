import { Product } from './product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    products: Product[],
    filterString: string,
    propName: string
  ): Product[] {
    const result: Product[] = [];
    if (!products || filterString === '' || propName === '') {
      return products;
    }
    products.filter((product: any) => {
      if (
        product[propName]
          .trim()
          .toLowerCase()
          .includes(filterString.toLowerCase()) ||
        product.description
          .trim()
          .toLowerCase()
          .includes(filterString.toLowerCase())
      ) {
        result.push(product);
      }
    });
    return result;
  }
}
