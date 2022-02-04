import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  id!: number;
  localCart = JSON.parse(localStorage.getItem('localCart') || '[]');
  displayImage = 0;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productService.getProduct(this.id);
    });
  }
  onIncrementQuantity(product: Product) {
    this.cartService.incrementQuantity(product);
    console.log(product);
  }
  onDecrementQuantity(product: Product) {
    this.cartService.decrementQuantity(product);
    console.log(product);
  }
  onAddToCart() {
    this.cartService.addProductToCart(this.product);
    this.notifierService.notify(
      'success',
      'Awesome! ' + this.product.name + ' is added to your Cart'
    );
  }
}
