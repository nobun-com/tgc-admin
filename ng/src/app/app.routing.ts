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
    path: 'centers',
    loadChildren: './htmls/centers/centers.module#CentersModule'
  }, {
    path: 'centers-list',
    loadChildren: './htmls/centers-list/centers-list.module#CentersListModule'
  }, {
    path: 'educator',
    loadChildren: './htmls/educator/educator.module#EducatorModule'
  }, {
    path: 'educator-list',
    loadChildren: './htmls/educator-list/educator-list.module#EducatorListModule'
  }, {
    path: 'instances-list/:id',
    loadChildren: './htmls/instances-list/instances-list.module#InstancesListModule'
  }, {
    path: 'classes',
    loadChildren: './htmls/classes/classes.module#ClassesModule'
  }, {
    path: 'classes-list',
    loadChildren: './htmls/classes-list/classes-list.module#ClassesListModule'
  }, {
    path: 'coupon',
    loadChildren: './htmls/coupon/coupon.module#CouponModule'
  }, {
    path: 'coupon-list',
    loadChildren: './htmls/coupon-list/coupon-list.module#CouponListModule'
  }, {
    path: 'article',
    loadChildren: './htmls/article/article.module#ArticleModule'
  }, {
    path: 'article-list',
    loadChildren: './htmls/article-list/article-list.module#ArticleListModule'
  }, {
    path: 'promo',
    loadChildren: './htmls/promo/promo.module#PromoModule'
  }, {
    path: 'promo-list',
    loadChildren: './htmls/promo-list/promo-list.module#PromoListModule'
  }, {
    path: 'social',
    loadChildren: './htmls/social/social.module#SocialModule'
  }, {
    path: 'social-list',
    loadChildren: './htmls/social-list/social-list.module#SocialListModule'
  }, {
    path: 'booking-list',
    loadChildren: './htmls/booking-list/booking-list.module#BookingListModule'
  }, {
    path: 'slider',
    loadChildren: './htmls/slider/slider.module#SliderModule'
  }, {
    path: 'slider-list',
    loadChildren: './htmls/slider-list/slider-list.module#SliderListModule'
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
  path: 'educator-login',
  redirectTo: 'session/educator-login'
}
];
