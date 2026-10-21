import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
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
    ]
  }
}
