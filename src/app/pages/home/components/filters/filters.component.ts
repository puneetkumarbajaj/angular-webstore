import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StoreService } from '../../../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatListModule,
    CommonModule,
  ],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {

  @Output() categoryChange = new EventEmitter<string>();

  categorieSubscription : Subscription | undefined;

  categories : Array<string> | undefined;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.categorieSubscription = this.storeService.getAllCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  onShowCategory(category: string): void{
    this.categoryChange.emit(category);
  };

  ngOnDestroy(): void {
    if (this.categorieSubscription){
      this.categorieSubscription?.unsubscribe();
    }
  }

}
