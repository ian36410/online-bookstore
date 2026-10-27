import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  protected readonly cartService = inject(Cart);
}
