import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { ProductDetail } from '../product-detail/product-detail';
import { Product as ProductService } from '../../services/product';

@Component({
  imports: [ProductCard, ProductDetail],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  selectedProduct = signal<Product | null>(null);
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
