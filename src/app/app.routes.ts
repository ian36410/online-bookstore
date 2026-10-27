import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => 
            import('./features/product-list/product-list').then(p => p.ProductList),
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./features/cart/cart').then(c => c.Cart),
    },
    {
        path: 'product/:id',
        loadComponent: () =>
            import('./pages/product-page/product-page').then(p => p.ProductPage),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
