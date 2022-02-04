import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  totalPrice: number = 0;
  checkoutForm!: FormGroup;
  isAuthenticated = false;
  constructor(
    private cartService: CartService,
    private notifierService: NotifierService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
      // console.log(this.isAuthenticated);
    });

    this.checkoutForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      town: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, [
        Validators.required,
        // Validators.pattern(/^-?(|[1-9]\d*)?$/),
        Validators.minLength(4),
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        // Validators.pattern(/^-?(|[1-9]\d*)?$/),
        Validators.minLength(10),
      ]),
      comment: new FormControl(null),
      checkbox: new FormControl(null, Validators.required),
    });
    this.totalPrice = this.cartService.getTotalPrice();
  }
  onSubmit() {
    this.notifierService.notify(
      'success',

      ' Your request is being processed ,Thanks for you and your supporting our small business ❤'
    );
    this.router.navigate(['shop']);
    this.cartService.resetCart();
  }
}
