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
    HttpModule
   ],
  declarations: [   
    ArticleListComponent
     ],
  providers: [
    ArticleListService,
    Globals
  ]
})

export class ArticleListModule {}
