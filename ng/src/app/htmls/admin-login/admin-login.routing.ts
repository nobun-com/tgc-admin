import { Routes } from '@angular/router';

import { AdminLoginComponent } from '../admin-login/admin-login.component';




export const AdminLoginRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'admin-login',
      component: AdminLoginComponent
    }
    ]
  }
];
