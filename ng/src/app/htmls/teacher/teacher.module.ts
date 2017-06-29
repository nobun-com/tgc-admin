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
import { TeacherRoutes } from './teacher.routing';
import { TeacherComponent } from './teacher.component';
import { TeacherListService } from '../teacher-list/teacher-list.service';
import { TeacherService } from './teacher.service';
import { EditTeacherComponent } from './edit-teacher.component';
import { Globals } from '../../common/globals';
import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(TeacherRoutes),
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
    TeacherComponent,
    EditTeacherComponent
     ],
  providers: [
    TeacherListService,
    TeacherService,
    Globals
  ]
})

export class TeacherModule {}
