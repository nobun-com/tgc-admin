import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {
  MdCardModule,
  MaterialModule,
  MdIconModule,
  MdInputModule,
  MdRadioModule,
  MdButtonModule,    
  MdProgressBarModule,
  MdToolbarModule,
  MdSelectionModule,
  MdOptionModule,
  MdDatepickerModule,
  MdNativeDateModule
 } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HtmlsRoutes } from './htmls.routing';
import { CentersComponent } from './centers/centers.component';
import { CentersListComponent } from './centers-list/centers-list.component';
import { CentersService } from './centers/centers.service';
import { CentersListService } from './centers-list/centers-list.service';
import { EditCentersComponent } from './centers/edit-centers.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherService } from './teacher/teacher.service';
import { TeacherListService } from './teacher-list/teacher-list.service';
import { EditTeacherComponent } from './teacher/edit-teacher.component';
import { CreateClassesComponent } from './classes/create-classes.component';
import { ClassesService } from './classes/create-classes.service';
import { ClassListComponent } from './classes-list/classes-list.component';
import { EditClassesComponent } from './classes/edit-classes.component';
import { ClassListService } from './classes-list/classes-list.service';

import { CouponComponent } from './coupon/coupon.component';
import { CouponService } from './coupon/coupon.service';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { EditCouponComponent } from './coupon/edit-coupon.component';
import { CouponListService } from './coupon-list/coupon-list.service';


import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './article/edit-article.component';
import { ArticleListService } from './article-list/article-list.service';
import { InstancesListService } from './instances-list/instances-list.service';
import {InstancesListComponent } from './instances-list/instances-list.component';

import { Globals } from './globals';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(HtmlsRoutes),
    CommonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MaterialModule,
    MdRadioModule,
    MdButtonModule,
    MdProgressBarModule,
    MdToolbarModule,
    MdSelectionModule,
    MdOptionModule,
    NgxDatatableModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    TreeModule,
    HttpModule,
    MdDatepickerModule,
    MdNativeDateModule
   ],
  declarations: [
    CentersComponent,
    CentersListComponent,
    EditCentersComponent,
    TeacherComponent,
    TeacherListComponent,
    EditTeacherComponent,
    CreateClassesComponent,
    ClassListComponent,
    EditClassesComponent,
    CouponComponent, 
    EditCouponComponent,
    CouponListComponent,
    ArticleComponent, 
    EditArticleComponent,
    ArticleListComponent,
    InstancesListComponent
    
     ],
  providers: [
    CentersService,
    CentersListService,
    TeacherService,
    TeacherListService,
    ClassesService,
    ClassListService,
    CouponService,
    CouponListService,
    ArticleService,
    ArticleListService,
    InstancesListService,
    Globals

  ]
})

export class HtmlsModule {}
