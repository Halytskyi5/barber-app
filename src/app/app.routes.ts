import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(c => c.Home),
        loadChildren: () => import('./pages/home/home.routes').then(r => r.homeRoutes)
    }
];
