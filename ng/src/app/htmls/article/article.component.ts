import { Component, OnInit,Input, ChangeDetectionStrategy,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { ArticleService } from './article.service';
import { CentersService } from '../centers/centers.service';
import * as Quill from 'quill';
import { Globals } from '../../common/globals';

@Component({
  selector: 'article',
  templateUrl: './article.component.html' ,
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit{

   article : any;
   pageTitle: any;
   fileToUpload: Array<File>;
   uploadThumbnail : boolean = false;
   uploadImage : boolean = false;
   public form: FormGroup;
   public quill ;
   public editorContents : string;
   public categories : any;

  ngOnInit() {
    this.getCategory();

//    const quill = new Quill('#editor-container', {
     this.quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });

     this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      preview: [null, Validators.compose([Validators.required])],
      category: [null, Validators.required],
      postDate: [null, Validators.compose([Validators.required])],
      image : [],
      thumbnail : [],
      thumbnailUrl : [{disabled: true}],
      imageUrl : [{disabled: true}],
      published : [],
      featured : []
    });
  }

// Center CURD Operation  
  constructor(private fb: FormBuilder,private globals : Globals,private _centerService: CentersService,private _articleService: ArticleService,private _router :Router) {
     this.pageTitle = "Create New Article";
     this.article={
       title:'',
       preview:'',
       thumbnailUrl : '',
       imageUrl : '',
       category : '',
       postDate : '',
       body :'',
       published : false,
       featured : false
      }
     }
   

getCategory(){
  this._articleService.getCategory().subscribe(
      data => { 
        console.log(data);
        this.categories = data;
    },
      err => { console.log("error") }
  );
}
createOrUpdateArticle() {

  //below code returns delta object
 //this.article.body=JSON.stringify(this.quill.getContents());
  //below code retuns html
  this.article.body=this.quill.root.innerHTML;
  
    this._articleService.createArticle(this.article).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/article-list']);
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

   fileChangeEventForThumbnail(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
    console.log(this.fileToUpload);
     this._centerService.uploadLogo(this.fileToUpload).then((res) => {
       this.uploadThumbnail = true;
       this.article.thumbnailUrl= this.globals.SERVERADDRESS+"getImage/"+res;
     }, (err) => {
       console.log("error");
     });
  }
   fileChangeEventForImage(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
    console.log(this.fileToUpload);
     this._centerService.uploadLogo(this.fileToUpload).then((res) => {
       this.article.imageUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       this.uploadImage = true;
     }, (err) => {
       console.log("error");
     });
  }
  backToArticleList(){
    this._router.navigate(['/article-list']);
  }
 }