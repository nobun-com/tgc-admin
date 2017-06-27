import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLoginRoutes } from './admin-login.routing';
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
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { AdminLoginService } from '../admin-login/admin-login.service';
import { Globals } from '../globals';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(AdminLoginRoutes),
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
    AdminLoginComponent
     ],
  providers: [
    AdminLoginService,
    Globals

  ]
})

export class AdminLoginModule {}
