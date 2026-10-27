import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductList } from './features/product-list/product-list';
import { Cart } from './features/cart/cart';

@Component({
  imports: [RouterOutlet, Header, ProductList, Cart],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('online-bookstore');
}
