import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '/',
        title: 'App Navbar',
        component: NavbarComponent,
      },

      {
        path: '/users',
        title: 'Users',
        component: UsersComponent,  
      },
];
