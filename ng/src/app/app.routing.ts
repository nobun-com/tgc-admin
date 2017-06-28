import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './common/index';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'apps',
    loadChildren: './apps/apps.module#AppsModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'material',
    loadChildren: './material/material.module#MaterialComponentsModule'
  }, {
    path: 'ecommerce',
    loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }
   , {
     path: 'charts',
     loadChildren: './chartlib/chartlib.module#ChartlibModule'
   }
  , {
    path: 'maps',
    loadChildren: './maps/maps.module#MapModule'
  }, {
    path: 'dragndrop',
    loadChildren: './dragndrop/dragndrop.module#DragndropModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'htmls',
    loadChildren: './htmls/htmls.module#HtmlsModule',
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}, {
  path: 'admin-login',
  redirectTo: 'session/admin-login'
},{
  path: 'teacher-login',
  redirectTo: 'session/teacher-login'
}
];
