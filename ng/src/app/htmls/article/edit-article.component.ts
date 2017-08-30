import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { ArticleService } from './article.service';
import * as Quill from 'quill';
import { Globals } from '../../common/globals';
import { CentersService } from '../centers/centers.service';


@Component({
  selector: 'edit-article',
  templateUrl: './article.component.html' ,
  styleUrls: ['./article.component.scss']
})
export class EditArticleComponent {

   article : any;
   title : string;
   pageTitle: any;
   fileToUpload: Array<File>;
   uploadThumbnail : boolean = false;
   uploadImage : boolean = false;
   public form: FormGroup;
   public quill ;
   public editorContents : string;
   data1 : any ;
   public categories : any;
   thumbnails='';
   images='';

// Center CURD Operation  
 constructor(private fb: FormBuilder,private globals : Globals,private _centerService: CentersService,private _articleService: ArticleService,private activatedRoute: ActivatedRoute,private _router :Router) {
       this.pageTitle = "Update Article";
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
    this.activatedRoute.params.subscribe((params: Params) => {
        let articleId = params['id'];
          this.getArticle(articleId);
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

getArticle(articleId){
  this._articleService.getById(articleId).subscribe(
      data=>{
        this.article = data;
         this.uploadThumbnail = true;
         this.uploadImage = true;
         this.images= this.article.imageUrl;
         this.thumbnails=this.article.thumbnailUrl;
        //  this.images= this.globals.SERVERADDRESS+"getImage/"+ this.article.imageUrl;
        //  this.thumbnails= this.globals.SERVERADDRESS+"getImage/"+ this.article.thumbnailUrl;
         this.quill.root.innerHTML=this.article.body;
        //this.quill.setContents(this.article.body);
      },
      err =>{
        console.log("error")
      }
  )
}

getCategory(){
  this._articleService.getCategory().subscribe(
      data => { 
        this.categories = data;
    },
      err => { console.log("error") }
  );
}

 createOrUpdateArticle() {
   
  //below code returns delta object
  this.editorContents=this.quill.getContents();
  //console.log("getContents",this.quill.getText());
  
  //below code retuns html
  //this.article.body=this.quill.root.innerHTML;
//below code retuns data
  this.article.body=this.quill.getText();
  
    this._articleService.updateArticle(this.article).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/article-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }
   fileChangeEventForThumbnail(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._centerService.uploadLogo(this.fileToUpload).then((res) => {
       this.uploadThumbnail = true;
       this.article.thumbnailUrl= res;
       this.thumbnails= res+"";
      // this.thumbnails= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
   fileChangeEventForImage(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._centerService.uploadLogo(this.fileToUpload).then((res) => {
       this.uploadImage = true;
       this.article.imageUrl= res;
       this.images= res+"";
       //this.images= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }

  backToArticleList(){
    this._router.navigate(['/article-list']);
  }
 
 }