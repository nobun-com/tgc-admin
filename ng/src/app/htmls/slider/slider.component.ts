import { Component, OnInit,Input, ChangeDetectionStrategy,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { SliderService } from './slider.service';
import { Globals } from '../../common/globals';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html' ,
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit{

   slider : any;
   pageTitle: any;
   fileToUpload: Array<File>;
   public form: FormGroup;
   uploadImage : boolean = false;
   imageUrl: String ='';

  ngOnInit() {
     this.form = this.fb.group({
      imageUrl :[],
      title : [null, Validators.compose([Validators.required])],
      url : [null, Validators.compose([Validators.required])],
      urlTitle : [null, Validators.compose([Validators.required])],
      description : [null, Validators.compose([Validators.required])]
    });
  }

// Center CURD Operation  
  constructor(private fb: FormBuilder,private globals : Globals,private _sliderService: SliderService,private _router :Router) {
     this.pageTitle = "Create New Slider";
     this.slider={
      imageUrl : '',
      title : '',
      description : '',
      url : '',
      urlTitle : ''
      }
     }

createOrUpdateSlider() {
    this._sliderService.createSlider(this.slider).subscribe(
       data => {
         // refresh the list
        alert("Succesfully saved.");
         this._router.navigate(['/slider-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

  sliderImage(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._sliderService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadImage = true;
       this.slider.imageUrl= res;
       this.imageUrl= res+"";
       //this.sliderImageOneUrl= this.globals.SERVERADDRESS+"getImage/"+res;
     }, (err) => {
       console.log("error");
     });
  }

  backToSliderList(){
    this._router.navigate(['/slider-list']);
  }

 }
