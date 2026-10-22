import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product';
import { PricePipe } from '../../pipes/price-pipe';
import { OutOfStock } from '../../directives/out-of-stock';

@Component({
  imports: [NgOptimizedImage, PricePipe, OutOfStock],
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
