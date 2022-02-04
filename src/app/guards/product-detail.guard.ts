import { ProductService } from '../services/product.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Product } from '../shared/product.model';
@Injectable({ providedIn: 'root' })
export class ProductDetailGuard implements CanActivate {
  products: Product[] = [];
  id!: number;
  constructor(private productService: ProductService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.id = +route.params.id;
    this.products = this.productService.getProducts();
    for (const product of this.products) {
      if (this.id == product.id) {
        return true;
      }
    }
    this.router.navigate(['/shop']);
    return false;
  }
}
