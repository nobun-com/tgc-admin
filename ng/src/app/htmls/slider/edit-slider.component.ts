import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { SliderService } from './slider.service';
import { Globals } from '../../common/globals';


@Component({
  selector: 'edit-slider',
  templateUrl: './slider.component.html' ,
  styleUrls: ['./slider.component.scss']
})
export class EditSliderComponent {

   slider : any;
   pageTitle: any;
   fileToUpload: Array<File>;
   public form: FormGroup;
   uploadImage : boolean = false;
   imageUrl: String ='';
   

// Center CURD Operation  
 constructor(private fb: FormBuilder,private globals : Globals,private _sliderService: SliderService,private activatedRoute: ActivatedRoute,private _router :Router) {
    this.pageTitle = "Update Slider";
     this.slider={
       imageUrl : '',
       title : '',
       description : '',
       url : '',
       urlTitle : ''
      }
     }
   

ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let sliderId = params['id'];
          this.getSlider(sliderId);
      });
     this.form = this.fb.group({
       imageUrl :[],
       title : [null, Validators.compose([Validators.required])],
       url : [null, Validators.compose([Validators.required])],
       urlTitle : [null, Validators.compose([Validators.required])],
       description : [null, Validators.compose([Validators.required])]
    });
  }

getSlider(sliderId){
  this._sliderService.getById(sliderId).subscribe(
      data=>{
        this.slider = data;
        if(this.slider.imageUrl != ''){
          this.uploadImage = true;
          this.imageUrl=this.slider.imageUrl;
        }
      },
      err =>{
        console.log("error")
      }
  )
}


createOrUpdateSlider() {
    this._sliderService.updateSlider(this.slider).subscribe(
       data => {
         // refresh the list
         alert("Succesfully updated.");
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