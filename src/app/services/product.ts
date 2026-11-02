import { inject, Service } from '@angular/core';
import { Product as ProductModel } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class Product {
    private http = inject(HttpClient);

    private products: ProductModel[] = [
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

    getProducts(): ProductModel[]{
        return this.products;
    }

    getProductById(id: number): ProductModel | undefined{
        return this.products.find(product => product.id === id);
    }

    fetchProducts(): Observable<ProductModel[]>{
        return this.http.get<ProductModel[]>('http://127.0.0.1:3000/products');
    }
}
