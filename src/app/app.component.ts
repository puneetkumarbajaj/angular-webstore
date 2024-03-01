import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-header [cart]="cart" ></app-header>
    <router-outlet></router-outlet>
  `,
    styles: [],
    imports: [
      RouterOutlet, 
      HeaderComponent,
    ]
})
export class AppComponent implements OnInit{
  cart: Cart = {items: []};

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.cartService.cart.subscribe((_cart) => {
          this.cart = _cart;
      });
  }
}
