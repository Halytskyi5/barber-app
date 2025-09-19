import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
    {
        path: 'general', 
        loadComponent: () => import('../general-page/general-page').then(c => c.GeneralPage)
    },
    {
        path: '**',
        redirectTo: 'general'
    }
];