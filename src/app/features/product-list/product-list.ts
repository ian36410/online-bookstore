import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { Product as ProductService } from '../../services/product';
import { Router } from '@angular/router';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  viewProduct(product: Product): void{
    this.router.navigate(['/product', product.id]);
  }
}
