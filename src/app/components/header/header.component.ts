import { Component, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../../models/cart.model';
import { CartComponent } from '../../pages/cart/cart.component';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatBadge, MatMenuModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  private _cart : Cart = {items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart (cart: Cart){
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item)=> item.quantity).reduce((prev, curr) => prev + curr, 0);
  }

  constructor(private cartService : CartService) {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
