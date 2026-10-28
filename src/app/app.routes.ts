import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => 
            import('./features/product-list/product-list').then(module => module.ProductList),
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./features/cart/cart').then(module => module.Cart),
    },
    {
        path: 'product/:id',
        loadComponent: () =>
            import('./pages/product-page/product-page').then(module => module.ProductPage),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then(module => module.Login),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
