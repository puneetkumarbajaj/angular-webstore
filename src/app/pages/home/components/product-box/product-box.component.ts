import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product : Product | undefined = {
    id : 1,
    title : 'Product 1',
    price : 100,
    description : 'Description 1',
    category : 'Category 1',
    image : 'https://via.placeholder.com/150/0000FF/808080?Text=Digital.com'
  };

  @Output() addToCart = new EventEmitter();
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
