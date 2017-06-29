import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {
  MdCardModule,
  MaterialModule,
  MdIconModule,
  MdButtonModule,    
  MdToolbarModule,
 } from '@angular/material';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeacherListRoutes } from './teacher-list.routing';
import { TeacherListComponent } from './teacher-list.component';
import { TeacherListService } from './teacher-list.service';
import { Globals } from '../../common/globals';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(TeacherListRoutes),
    CommonModule,
    MdCardModule,
    MdIconModule,
    MaterialModule,
    MdButtonModule,
    MdToolbarModule,
    NgxDatatableModule,
    FlexLayoutModule,
    TreeModule,
    HttpModule
   ],
  declarations: [   
    TeacherListComponent
     ],
  providers: [
    TeacherListService,
    Globals
  ]
})

export class TeacherListModule {}
