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
import { ClassesRoutes } from './classes.routing';
import { CreateClassesComponent } from './create-classes.component';
import { EditClassesComponent } from './edit-classes.component';
import { ClassesService } from './create-classes.service';
import { CentersListService } from '../centers-list/centers-list.service';
import { TeacherListService } from '../teacher-list/teacher-list.service';
import { ClassesListService } from '../classes-list/classes-list.service';
import { Globals } from '../../common/globals';
import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(ClassesRoutes),
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
    CreateClassesComponent,
    EditClassesComponent
     ],
  providers: [
    ClassesService,
    CentersListService,
    TeacherListService,
    ClassesListService,
    Globals
  ]
})

export class ClassesModule {}
