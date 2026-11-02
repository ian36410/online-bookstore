import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { Product as ProductService } from '../../services/product';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  products = signal<Product[]>([]);
  loadError = signal('');
  loading = signal(false);
  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadError.set('');
    this.loading.set(true);
    this.productService.fetchProducts().pipe(finalize(() => this.loading.set(false))).subscribe({
      next: book => this.products.set(book),
      error: () => {this.loadError.set('商品載入失敗，請稍後再試')}
    });
  }

  viewProduct(product: Product): void{
    this.router.navigate(['/product', product.id]);
  }
}
