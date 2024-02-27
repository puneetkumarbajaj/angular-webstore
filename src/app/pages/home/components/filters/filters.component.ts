import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

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

  categories = [
    'shoes',
    'clothes',
    'watches',
  ];

  onShowCategory(category: string): void{
    this.categoryChange.emit(category);
  };

}
