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
  MdDatepickerModule,
  MdNativeDateModule
 } from '@angular/material';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookingListRoutes } from './booking-list.routing';
import { BookingListComponent } from './booking-list.component';
import { BookingListService } from './booking-list.service';
import { Globals } from '../../common/globals';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(BookingListRoutes),
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
    MdDatepickerModule,
    MdNativeDateModule,
    Ng2SmartTableModule
   ],
  declarations: [   
    BookingListComponent
     ],
  providers: [
    BookingListService,
    Globals,
    DatePipe
  ]
})

export class BookingListModule {}
