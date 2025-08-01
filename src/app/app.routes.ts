import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: LoginPage,
    title: 'Authentification'
}, {
    path: 'home',
    component: HomePage,
    title: 'Gestionnaire de mot de passe'
}]; 
