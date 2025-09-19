import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
    {
        path: 'general',
        loadComponent: () => import('../general-page/general-page').then(c => c.GeneralPage)
    },
    {
      path: 'statistics',
      loadComponent: () => import('../statistics/statistics').then(c => c.Statistics)
    },
    {
        path: '**',
        redirectTo: 'general'
    }
];
