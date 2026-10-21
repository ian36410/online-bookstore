import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  selected = output<Product>();

  selectProduct(product: Product): void{
    this.selected.emit(product);
  }
}
