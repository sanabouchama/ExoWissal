import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CommonModule } from '@angular/common';
import { Produits } from './produits';
@Component({
  selector: 'app-root',
  imports: [ProductFilterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Initializing  catListP to send if to the child
  catListP: string[] = ['Électronique', 'Vêtements', 'Livres', 'Accessoires'];
  // Filling the product list with data
  produits: Produits[] = [
    { nom: 'Ordinateur', ref: 4565453, cat: 'Électronique' },
    { nom: 'Clavier', ref: 5645456, cat: 'Électronique' },
    { nom: 'Pantalon', ref: 65635456, cat: 'Vêtements' },
    { nom: 'Jupe', ref: 767786, cat: 'Vêtements' },
    { nom: 'Le petit prince', ref: 98970, cat: 'Livres' },
    { nom: 'Hugo', ref: 43556, cat: 'Livres' },
    { nom: 'Collier', ref: 76557, cat: 'Accessoires' },
    { nom: 'Boucle', ref: 657478, cat: 'Accessoires' },
  ];

  produitFiltrer: Produits[] = [];

  //Filter the product list based on the category selected and assigned it to produitFiltrer to display it
  selected(catSel: string) {
    this.produitFiltrer = this.produits.filter(
      (product) => product.cat == catSel
    );
  }
}
