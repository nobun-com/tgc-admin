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
   uploadSliderImageOne : boolean = false;
   uploadSliderImageTwo :  boolean = false;
   uploadSliderImageThree :  boolean = false;
   uploadSliderImageFour :  boolean = false;
   uploadSliderImageFive :  boolean = false;
   termsCharLeft : any;
   sliderImageOneUrl :String;
   sliderImageTwoUrl : String;
   sliderImageThreeUrl : String;
   sliderImageFourUrl : String;
   sliderImageFiveUrl : String;

  ngOnInit() {
     this.form = this.fb.group({
       sliderImageOne :[],
       sliderImageTwo : [],
       sliderImageThree : [],
       sliderImageFour : [],
       sliderImageFive : []
    });
  }

// Center CURD Operation  
  constructor(private fb: FormBuilder,private globals : Globals,private _sliderService: SliderService,private _router :Router) {
     this.pageTitle = "Create New Slider";
     this.slider={
       sliderImageOne : '',
       sliderImageTwo : '',
       sliderImageThree : '',
       sliderImageFour : '',
       sliderImageFive : ''
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

   sliderImageOne(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._sliderService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadSliderImageOne = true;
       this.slider.sliderImageOne= res;
       this.sliderImageOneUrl= res+"";
       //this.sliderImageOneUrl= this.globals.SERVERADDRESS+"getImage/"+res;
     }, (err) => {
       console.log("error");
     });
  }
  sliderImageTwo(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._sliderService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadSliderImageTwo = true;
       this.slider.sliderImageTwo= res;
       this.sliderImageTwoUrl= res+"";
       //this.sliderImageTwoUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
  
  sliderImageThree(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._sliderService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadSliderImageThree = true;
       this.slider.sliderImageThree= res;
       this.sliderImageThreeUrl= res+"";
       //this.sliderImageThreeUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
  
  sliderImageFour(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._sliderService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadSliderImageFour = true;
       this.slider.sliderImageFour= res;
       this.sliderImageFourUrl= res+"";
       //this.sliderImageFourUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }

   sliderImageFive(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._sliderService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadSliderImageFive = true;
       this.slider.sliderImageFive= res;
       this.sliderImageFiveUrl= res+"";
       //this.sliderImageFourUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }

  backToSliderList(){
    this._router.navigate(['/slider-list']);
  }

 }
