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
import { ArticleListRoutes } from './article-list.routing';
import { ArticleListComponent } from './article-list.component';
import { ArticleListService } from './article-list.service';
import { Globals } from '../../common/globals';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

import 'hammerjs';


@NgModule({
  imports: [    
    RouterModule.forChild(ArticleListRoutes),
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
    ArticleListComponent
     ],
  providers: [
    ArticleListService,
    Globals,
    DatePipe
  ]
})

export class ArticleListModule{}
