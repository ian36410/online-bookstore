import { Component, computed, input, linkedSignal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product';
import { PricePipe } from '../../pipes/price-pipe';

@Component({
  imports: [NgOptimizedImage, PricePipe],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  product = input.required<Product>();
  quantity = linkedSignal({
    source: this.product,
    computation: () => 1,
  });

  increaseQuantity(): void{
    this.quantity.update(value => value + 1);
  }

  decreaseQuantity(): void{
    this.quantity.update(value => value - 1);
  }

  subtotal = computed(() => this.quantity() * this.product().price);
}
