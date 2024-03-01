import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar : MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemsInCart = items.find((i) => i.id === item.id);
    if (itemsInCart) {
      itemsInCart.quantity += item.quantity;
    } else {
      items.push(item);
    }

    this.cart.next({items});
    this._snackBar.open('Product added to cart', 'Close', {duration: 2000});
    console.log(this.cart.value);
  }

  getTotal(items: Array<CartItem>): number {
    return items
          .map((item) => item.price * item.quantity)
          .reduce((prev, curr) => prev + curr, 0);
  }

  clearCart(): void {
    this.cart.next({items: []});
    this._snackBar.open('Cart cleared', 'Close', {duration: 2000});
  }

  removeItem(id: number): void {
    const items = [...this.cart.value.items];
    const index = items.findIndex((i) => i.id === id);
    items.splice(index, 1);
    this.cart.next({items});
    this._snackBar.open('Product removed from cart', 'Close', {duration: 2000});
  }

  changeQuantity(id: number, quantity: number): void {
    const items = [...this.cart.value.items];
    const item = items.find((i) => i.id === id);
    if (item) {
      item.quantity = item.quantity + quantity;
      this.cart.next({items});
    }
    if (item && item.quantity <= 0) {
      this.removeItem(id);
    }
  }
}
