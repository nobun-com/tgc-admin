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
  },{
     path: 'charts',
     loadChildren: './chartlib/chartlib.module#ChartlibModule'
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapModule'
  }, {
    path: 'dragndrop',
    loadChildren: './dragndrop/dragndrop.module#DragndropModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  }, {
    path: 'centers',
    loadChildren: './htmls/centers/centers.module#CentersModule',
  }, {
    path: 'centers-list',
    loadChildren: './htmls/centers-list/centers-list.module#CentersListModule',
  }, {
    path: 'teacher',
    loadChildren: './htmls/teacher/teacher.module#TeacherModule',
  }, {
    path: 'teacher-list',
    loadChildren: './htmls/teacher-list/teacher-list.module#TeacherListModule',
  }, {
    path: 'instances-list/:id',
    loadChildren: './htmls/instances-list/instances-list.module#InstancesListModule',
  }, {
    path: 'classes',
    loadChildren: './htmls/classes/classes.module#ClassesModule',
  }, {
    path: 'classes-list',
    loadChildren: './htmls/classes-list/classes-list.module#ClassesListModule',
  }, {
    path: 'coupon',
    loadChildren: './htmls/coupon/coupon.module#CouponModule',
  }, {
    path: 'coupon-list',
    loadChildren: './htmls/coupon-list/coupon-list.module#CouponListModule',
  }, {
    path: 'article',
    loadChildren: './htmls/article/article.module#ArticleModule',
  }, {
    path: 'article-list',
    loadChildren: './htmls/article-list/article-list.module#ArticleListModule',
  }
  ]
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
