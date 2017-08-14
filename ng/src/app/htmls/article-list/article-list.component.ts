import { Component,OnInit } from '@angular/core';
import { ArticleListService } from './article-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  rows = [];

  constructor(private datePipe: DatePipe,private _articleListService: ArticleListService,private _router :Router) {
   
  }



settings = {
 actions: {
      add : false,
      edit : false,
      delete : false,
      position : 'right',
      custom: [
        {
          name: 'edit',
          title: 'Edit '
        },
        {
          name: 'delete',
          title: 'Delete '
        }
      ],
    },
  columns: {
    // id: {
    //   title: 'ID'
    // },
    title: {
      title: 'Title',
      filter: false,
      sort : false
    },
    category: {
      title: 'Category',
      filter: false,
      sort : false
      
    },
    postDate: {
      title: 'Post Date',
      filter: false,
      valuePrepareFunction: (postDate) => { 
        var raw = new Date(postDate);

        var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
        return formatted; 
      }
    }
  }
};


ngOnInit() {
    this.getArticles();
  }
  
getArticles() {
    this._articleListService.getArticles().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }

  createArticle(){
    this._router.navigate(['/article/article']);
  }
 

onCustom(event) {
   if(event.action == 'delete'){
     if (confirm("Are you sure you want to delete " + event.data.id + "?")) {
      this._articleListService.deleteArticle(event.data.id).subscribe(
         data => {
           this.getArticles();
           return true;
         },
         error => {
           console.error("Error deleting food!");
         }
      );
    }
   }
  if(event.action == 'edit'){
      this._router.navigate(['/article/edit-article',event.data.id]);
   }
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }
}
