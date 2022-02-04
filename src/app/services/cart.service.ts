import { Product } from '../shared/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  localCart = JSON.parse(localStorage.getItem('localCart') || '[]');
  cartItems: Product[] = this.localCart;
  productList = new BehaviorSubject<Product[]>(this.localCart);

  constructor() {}

  getCartProducts() {
    return this.productList.asObservable();
  }

  // get getLocalCartProduct() {
  //   return this.localCart;
  // }

  // setProduct(product: Product[]) {
  //   this.cartItems.push(...product);
  //   this.productList.next(this.cartItems);
  // }

  addProductToCart(product: Product) {
    for (const index in this.cartItems) {
      if (this.cartItems[index].id == product.id) {
        return;
      }
    }
    product.isSelected = true;
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
    localStorage.setItem('localCart', JSON.stringify(this.cartItems));
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.map((product: Product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  }

  removeCartItem(product: Product) {
    this.cartItems.map((productSelected: Product, index: number) => {
      if (product.id === productSelected.id) {
        productSelected.quantity = 1;
        this.cartItems.splice(index, 1);
        product.isSelected = false;
      }
    });
    this.productList.next(this.cartItems);
    this.localCart = this.cartItems;
    localStorage.setItem('localCart', JSON.stringify(this.localCart));
  }

  incrementQuantity(cartItem: Product) {
    cartItem.quantity++;
    this.productList.next(this.cartItems);
    this.getTotalPrice();
    localStorage.setItem('localCart', JSON.stringify(this.cartItems));
  }

  decrementQuantity(cartItem: Product) {
    if (cartItem.quantity != 1) {
      cartItem.quantity--;
      this.productList.next(this.cartItems);
      this.getTotalPrice();
      localStorage.setItem('localCart', JSON.stringify(this.cartItems));
    } else {
      this.removeCartItem(cartItem);
    }
  }

  resetCart() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
    localStorage.removeItem('localCart');
  }
}
