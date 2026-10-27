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

    removeItem(productId: number): void{
        this.itemsState.update(items => items.filter(item => item.product.id !== productId));
    }

    updateQuantity(productId: number, quantity: number): void{
        const updateProduct = this.itemsState().find(item => item.product.id === productId);
        const currentStock = updateProduct?.product.stock ?? 0;
        const valid = Number.isInteger(quantity) && quantity > 0;
        if(!updateProduct || !valid || quantity > currentStock){
            return;
        }
        this.itemsState.update(items => 
            items.map(item => 
                item.product.id === productId ? 
                { ...item, quantity } : item
            )
        );
    }
}
