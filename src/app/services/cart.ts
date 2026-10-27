import { computed, Service, signal } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Service()
export class Cart {
    private itemsState = signal<CartItem[]>([]);
    readonly items = this.itemsState.asReadonly();
    readonly totalQuantity = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));

    addItem(product: Product, quantity: number): void{
        const valid = Number.isInteger(quantity) && quantity > 0;
        const currentQuantity = this.itemsState().find(item => item.product.id === product.id)?.quantity ?? 0;
        if(!valid || product.stock <= 0 || currentQuantity + quantity > product.stock){
            return;
        }
        this.itemsState.update(items => {
            const exists = items.some(
                item => item.product.id === product.id
            );
            if(exists){
                return items.map(item => {
                    if(item.product.id === product.id){
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                        };
                    }
                    return item;
                });
            }
            return [
                ...items,
                {product, quantity},
            ];
        });
    }
}
