import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product as ProductService } from '../../services/product';
import { Product as ProductModel } from '../../models/product';
import { ProductDetail } from '../../features/product-detail/product-detail';

@Component({
  imports: [ProductDetail],
  selector: 'app-product-page',
  styleUrl: './product-page.css',
  templateUrl: './product-page.html',
})
export class ProductPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  product: ProductModel | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
}
