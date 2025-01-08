import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [CommonModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
})
export class ProductFilterComponent {
  @Input() catList: string[] = [];

  @Output() catSelected = new EventEmitter<string>();

  select(cat: string) {
    this.catSelected.emit(cat);
  }
}
