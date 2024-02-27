import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Cart, CartItem } from '../../models/cart.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
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
  ]}

  dataSource : Array<CartItem> = [];
  displayedColumns: Array<string> = ['product', 'name', 'price', 'quantity', 'total', 'action'];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
          .map((item) => item.price * item.quantity)
          .reduce((prev, curr) => prev + curr, 0);
  }


}
