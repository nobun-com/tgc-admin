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
import { PromoListRoutes } from './promo-list.routing';
import { PromoListComponent } from './promo-list.component';
import { PromoListService } from './promo-list.service';
import { Globals } from '../../common/globals';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(PromoListRoutes),
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
    PromoListComponent
     ],
  providers: [
    PromoListService,
    Globals
  ]
})

export class PromoListModule {}
