import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {
  MdCardModule,
  MaterialModule,
  MdInputModule,
  MdButtonModule,    
 } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogRoutes } from './confirm-dialog.routing';
import { Globals } from '../../common/globals';
import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(ConfirmDialogRoutes),
    CommonModule,
    MdCardModule,
    MdInputModule,
    MaterialModule,
    MdButtonModule,
    NgxDatatableModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
   ],
  providers: [
    Globals
  ]
})

export class ConfirmDialogModule {}
