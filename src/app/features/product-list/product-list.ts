import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = [
  {
    id: 1,
    name: '原子習慣',
    image: 'https://placehold.co/300x400?text=Atomic+Habits',
    price: 350,
    stock: 20
  },
  {
    id: 2,
    name: '被討厭的勇氣',
    image: 'https://placehold.co/300x400?text=Book+2',
    price: 300,
    stock: 0
  }
];
}
