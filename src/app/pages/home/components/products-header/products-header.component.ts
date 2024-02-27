import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    
  ],
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void{
    this.sort = newSort;
  }

  onItemsUpdated(newItemsCount: number): void{
    this.itemsShowCount = newItemsCount;
  };

  onColunsUpdated(newColumnsCount: number): void{
    this.columnsCountChange.emit(newColumnsCount);
  };

}
