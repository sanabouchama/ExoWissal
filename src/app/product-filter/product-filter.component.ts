import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [CommonModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
})
export class ProductFilterComponent {
  //Request category list from parent
  @Input() catList: string[] = [];

  @Output() catSelected = new EventEmitter<string>();

  //Emit the click button Event containing the  value of the  category selected
  select(cat: string) {
    this.catSelected.emit(cat);
  }
}
