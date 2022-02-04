import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  isLoading: boolean = false;
  searchKey: string = '';
  products: Product[] = [];
  loadedProducts: Product[] = [];
  filterCategory!: Product[];
  activeCategory: string = 'All';
  localCart = JSON.parse(localStorage.getItem('localCart') || '[]');
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((products) => {
      console.log(products);
      // this.products = this.productService.getProducts();
      this.products = products;
    });
    this.products = this.productService.getProducts();
    console.log(this.products);
    this.filterCategory = this.products;

    // this.loadedProducts = this.products;
    if (!this.localCart.length) {
      // this.loadedProducts = this.products;
      this.filterCategory = this.products;
      for (const product of this.products) {
        product.isSelected = false;
      }
    } else {
      for (const localProduct of this.localCart) {
        for (const product of this.products) {
          if (localProduct.id == product.id) {
            product.isSelected = true;
          }
        }
      }
    }
  }
  filter(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.filterCategory = this.products;
    } else {
      this.filterCategory = this.products.filter((product: any) => {
        if (product.category === category) {
          return product;
        }
      });
    }
  }
  toggleView() {}
}
