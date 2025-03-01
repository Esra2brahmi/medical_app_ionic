import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', // Redirect to the welcome page first
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.component').then((m) => m.TabsComponent),
    children: [
      {
        path: '',
        redirectTo: '/tabs/home', // Default to home when accessing tabs
        pathMatch: 'full',
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
          },
          
        ],
      },
      {
        path: 'members',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./member-page/member-page.component').then(
                (m) => m.MemberPageComponent
              ),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./member-detail-page/member-detail-page.component').then(
                (m) => m.MemberDetailPageComponent
              ),
          },
        ],
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account/account.component').then(
            (m) => m.AccountComponent
          ),
      },
      // You can add other routes here, like stats or any additional pages
    ],
    
  },
  {
    path: 'home', // New route for home and events
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'events/:id',
        loadComponent: () =>
          import('./home/event/event.page').then((m) => m.EventPage),
      },
      {
        path: 'services/:id',
        loadComponent: () => import('./home/speciality/speciality.page').then( m => m.SpecialityPage)
      },
    ],
  },
  
];