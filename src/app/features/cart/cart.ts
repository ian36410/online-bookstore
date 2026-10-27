import { Component, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';
import { PricePipe } from '../../pipes/price-pipe';

@Component({
  imports: [PricePipe],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  protected readonly cartService = inject(CartService);
}
