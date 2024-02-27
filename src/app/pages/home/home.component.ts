import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from './components/product-box/product-box.component';
const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    ProductsHeaderComponent,
    FiltersComponent,
    MatGridListModule,
    ProductBoxComponent,
    
  ],
  templateUrl: './home.component.html',
})

export class HomeComponent {

  columnsCount = 3;

  rowHeight = ROWS_HEIGHT[this.columnsCount];

  category: string | undefined;

  onColumnsCountChange(newColumnsCount: number): void{
    this.columnsCount = newColumnsCount;
    this.rowHeight = ROWS_HEIGHT[this.columnsCount];
  }

  onCategoryChange(newCategory: string): void{
    this.category = newCategory;
  }

}
