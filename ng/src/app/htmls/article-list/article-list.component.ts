import { Component,OnInit } from '@angular/core';
import { ArticleListService } from './article-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  rows = [];

  constructor(private _articleListService: ArticleListService,private _router :Router) {
   
  }


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


   editArticle(article) {   
     this._router.navigate(['/article/edit-article',article.id]);
  }

  createArticle(){
    this._router.navigate(['/article/article']);
  }
 
  deleteArticle(article) {
    if (confirm("Are you sure you want to delete " + article.title + "?")) {
      this._articleListService.deleteArticle(article.id).subscribe(
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
}
