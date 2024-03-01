import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Cart, CartItem } from '../../models/cart.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,

  ],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  cart: Cart = {items: [
    {
    product: 'https://via.placeholder.com/150/0000FF/808080?Text=Digital.com',
    name: 'Product 1',
    price: 100,
    quantity: 1,
    id: 1,
    },
    {
    product: 'https://via.placeholder.com/150/0000FF/808080?Text=Digital.com',
    name: 'Product 2',
    price: 200,
    quantity: 2,
    id: 2,
    },
  ]};

  dataSource : Array<CartItem> = [];
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action'];
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveItem(id: number): void {
    this.cartService.removeItem(id);
  }

  onChangeQuantity(id: number, quantity: number): void {
    this.cartService.changeQuantity(id, quantity);
  }
}
