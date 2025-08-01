import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/login-page/login-page').then(m => m.LoginPage)
}, {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage)
}]; 
