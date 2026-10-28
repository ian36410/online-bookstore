import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => 
            import('./features/product-list/product-list').then(module => module.ProductList),
        canActivate: [authGuard],
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./features/cart/cart').then(module => module.Cart),
        canActivate: [authGuard],
    },
    {
        path: 'product/:id',
        loadComponent: () =>
            import('./pages/product-page/product-page').then(module => module.ProductPage),
        canActivate: [authGuard],
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then(module => module.Login),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./pages/register/register').then(module => module.Register),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
