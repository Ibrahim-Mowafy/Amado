import { Product } from './shared/product.model';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // localCart: Product[] = JSON.parse(localStorage.getItem('localCart') || '[]');
  products: Product[] = [];
  constructor(
    private authService: AuthService,
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.autoLogin();
    }
    // if (this.localCart.length) {
    //   this.products = this.productService.getProducts();
    //   for (const localProduct of this.localCart) {
    //     for (const product of this.products) {
    //       if (localProduct.id == product.id) {
    //         product.isSelected = true;
    //         product.quantity = localProduct.quantity;
    //       }
    //     }
    //   }
    //   this.productService.setProducts(this.products);
    // }
  }
}
