import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit, OnDestroy{

  columnsCount = 3;

  rowHeight = ROWS_HEIGHT[this.columnsCount];

  category: string | undefined;

  products: Array<Product> | undefined;
  sort = 'desc';
  count = "12";
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe((_products) => {
      this.products = _products;
    });
  }

  onColumnsCountChange(newColumnsCount: number): void{
    this.columnsCount = newColumnsCount;
    this.rowHeight = ROWS_HEIGHT[this.columnsCount];
  }

  onCategoryChange(newCategory: string): void{
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id, 
      name: product.title, 
      price: product.price, 
      quantity: 1,
      product: product.image
    });
  };

  onSortChange(newSort: string): void{
    this.sort = newSort;
    this.getProducts();
  }

  onItemsCountChange(newItemsCount: number): void{
    this.count = newItemsCount.toString();
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription)
    {
      this.productsSubscription?.unsubscribe();
    }
  }
}
