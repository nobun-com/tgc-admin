import { Routes } from '@angular/router';

import { CentersComponent } from './centers/centers.component';
import { CentersListComponent } from './centers-list/centers-list.component';
import { EditCentersComponent } from './centers/edit-centers.component';

import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { EditTeacherComponent } from './teacher/edit-teacher.component';
import { CreateClassesComponent } from './classes/create-classes.component';
import { ClassListComponent } from './classes-list/classes-list.component';
import { EditClassesComponent } from './classes/edit-classes.component';

import { CouponComponent } from './coupon/coupon.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { EditCouponComponent } from './coupon/edit-coupon.component';


import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './article/edit-article.component';

import { InstancesListComponent } from './instances-list/instances-list.component';




export const HtmlsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'create-center',
      component: CentersComponent
    },
    {
      path: 'center-list',
      component: CentersListComponent
    },
    {
      path: 'edit-center/:id',
      component: EditCentersComponent
    },
    {
      path: 'create-teacher',
      component: TeacherComponent
    },
    {
      path: 'teacher-list',
      component: TeacherListComponent
    },
    {
      path: 'edit-teacher/:id',
      component: EditTeacherComponent
    },
    {
      path: 'create-classes',
      component: CreateClassesComponent
    },
    {
      path: 'class-list',
      component: ClassListComponent
    },
    {
      path: 'edit-classes/:id',
      component: EditClassesComponent
    },
    {
      path: 'create-coupon',
      component: CouponComponent
    },
    {
      path: 'coupon-list',
      component: CouponListComponent
    },
    {
      path: 'edit-coupon/:id',
      component: EditCouponComponent
    },
    {
      path: 'create-article',
      component: ArticleComponent
    },
    {
      path: 'article-list',
      component: ArticleListComponent
    },
    {
      path: 'edit-article/:id',
      component: EditArticleComponent
    },
    {
      path: 'instances-list/:id',
      component: InstancesListComponent
    }
    ]
  }
];
