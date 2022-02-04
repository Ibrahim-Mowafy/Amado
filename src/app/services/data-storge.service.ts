import { Product } from '../shared/product.model';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    // private productService: ProductService
  ) {}
  // storeProducts() {
  //   const products = this.productService.getProducts();
  //   this.http
  //     .put(
  //       'https://amado-e2d91-default-rtdb.firebaseio.com/products.json',
  //       {}
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }
  fetchData() {
   return this.http
      .get<Product[]>(
        'https://amado-e2d91-default-rtdb.firebaseio.com/products.json'
      )
      // .subscribe((products) => {
      //   this.productService.setProducts(products);
      // });
  }
}
