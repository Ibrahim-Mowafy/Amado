import { CartService } from '../services/cart.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CheckoutGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.cartService.cartItems.length === 0) {
      this.router.navigate(['/shop']);
      return false;
    } else {
      return true;
    }
  }
}
