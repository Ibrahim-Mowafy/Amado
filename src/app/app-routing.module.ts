import { OrdersComponent } from './orders/orders.component';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShoppingListComponent,
  },
  { path: 'cart', component: CartComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [CheckoutGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'shop/:id',
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard],
  },
  { path: 'orders', component: OrdersComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
