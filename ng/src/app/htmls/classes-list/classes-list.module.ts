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
import { ClassesListRoutes } from './classes-list.routing';
import { ClassesListComponent } from './classes-list.component';
import { ClassesListService } from './classes-list.service';
import { InstancesListService } from '../instances-list/instances-list.service';
import { Globals } from '../../common/globals';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(ClassesListRoutes),
   CommonModule,
    MdCardModule,
    MdIconModule,
    MaterialModule,
    MdButtonModule,
    MdToolbarModule,
    NgxDatatableModule,
    FlexLayoutModule,
    TreeModule,
    HttpModule,
    Ng2SmartTableModule
   ],
  declarations: [   
    ClassesListComponent
     ],
  providers: [
    ClassesListService,
    InstancesListService,
    Globals,
    DatePipe
  ]
})

export class ClassesListModule {}
