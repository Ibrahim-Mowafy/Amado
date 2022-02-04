import { NotifierService } from 'angular-notifier';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSub!: Subscription;
  numberOfOrders: number = 0;
  isAuthenticated: boolean = false;
  userData = localStorage.getItem('userData');

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = !this.userData ? false : true;
    this.cartService.getCartProducts().subscribe((products) => {
      this.numberOfOrders = products.length;
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }
  onLogout() {
    this.authService.logout();
    this.notifierService.notify('warning', `keep in touch and see you soon!`);
  }

  onSaveData() {
    // this.dataStorageService.storeProducts();
  }
  onFetchData() {
    // this.dataStorageService.fetchData();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
