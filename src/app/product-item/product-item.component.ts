import { CartService } from '../services/cart.service';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';
import {
  Component,
  Input,
  OnInit,

} from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input()
  product!: Product;
  // productExists!: boolean;

  constructor(
    private router: Router,
    private cartService: CartService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    // this.cartService.isProductExist(this.product).subscribe((value) => {
    //   this.productExists = value;
    // });
  }

  onShowProductDetail() {
    this.router.navigate(['shop', this.product.id]);
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.product);
    this.notifierService.notify(
      'success',
      'Awesome! ' + this.product.name + ' is added to your Cart'
    );
  }
  // isProductExist() {
  //   this.productExists = this.cartService.isProductExist(this.product);
  // }
}
