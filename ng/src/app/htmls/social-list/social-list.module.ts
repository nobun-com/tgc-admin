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
import { SocialListRoutes } from './social-list.routing';
import { SocialListComponent } from './social-list.component';
import { SocialListService } from './social-list.service';
import { Globals } from '../../common/globals';


import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(SocialListRoutes),
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
    SocialListComponent
     ],
  providers: [
    SocialListService,
    Globals
  ]
})

export class SocialListModule {}
