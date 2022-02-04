import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/product.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;
  isAuthenticated: boolean = false;
  userData = localStorage.getItem('userData');
  localCart = JSON.parse(localStorage.getItem('localCart') || '[]');

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.isAuthenticated = !this.userData ? false : true;
    this.cartService.getCartProducts().subscribe((products) => {
      this.cartItems = products;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }
  onRemoveCartItem(product: Product) {
    this.cartService.removeCartItem(product);
  }
  onIncrementQuantity(cartItem: Product) {
    this.cartService.incrementQuantity(cartItem);
  }
  onDecrementQuantity(cartItem: Product) {
    this.cartService.decrementQuantity(cartItem);
  }
}
