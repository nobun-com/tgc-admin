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
import { EducatorListRoutes } from './educator-list.routing';
import { EducatorListComponent } from './educator-list.component';
import { EducatorListService } from './educator-list.service';
import { Globals } from '../../common/globals';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(EducatorListRoutes),
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
    EducatorListComponent
     ],
  providers: [
    EducatorListService,
    Globals
  ]
})

export class EducatorListModule {}
