import { Component, OnInit,Input, ChangeDetectionStrategy,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { PromoService } from './promo.service';
import { Globals } from '../../common/globals';

@Component({
  selector: 'promo',
  templateUrl: './promo.component.html' ,
  styleUrls: ['./promo.component.scss']
})

export class PromoComponent implements OnInit{

   promo : any;
   pageTitle: any;
   fileToUpload: Array<File>;
   public form: FormGroup;
   uploadPromoImageOne : boolean = false;
   uploadPromoImageTwo :  boolean = false;
   uploadPromoImageThree :  boolean = false;
   uploadPromoImageFour :  boolean = false;
   termsCharLeft : any;
   promoImageOneUrl :String;
   promoImageTwoUrl : String;
   promoImageThreeUrl : String;
   promoImageFourUrl : String;

  ngOnInit() {
     this.form = this.fb.group({
       promoUrlOne : [null, Validators.compose([Validators.required])],
       promoUrlTwo : [null, Validators.compose([Validators.required])],
       promoUrlThree : [null, Validators.compose([Validators.required])],
       promoUrlFour : [null, Validators.compose([Validators.required])],
       promoImageOne :[],
       promoImageTwo : [],
       promoImageThree : [],
       promoImageFour : []
    });
  }

// Center CURD Operation  
  constructor(private fb: FormBuilder,private globals : Globals,private _promoService: PromoService,private _router :Router) {
     this.pageTitle = "Create New Promo";
     this.promo={
       promoUrlOne : '',
       promoUrlTwo : '',
       promoUrlThree : '',
       promoUrlFour : '',
       promoImageOne : '',
       promoImageTwo : '',
       promoImageThree : '',
       promoImageFour : ''
      }
     }

createOrUpdatePromo() {
    this._promoService.createPromo(this.promo).subscribe(
       data => {
         // refresh the list
        alert("Succesfully saved.");
         this._router.navigate(['/promo-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

   promoImageOne(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageOne = true;
       this.promo.promoImageOne= res;
       this.promoImageOneUrl= res+"";
       //this.promoImageOneUrl= this.globals.SERVERADDRESS+"getImage/"+res;
     }, (err) => {
       console.log("error");
     });
  }
  promoImageTwo(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageTwo = true;
       this.promo.promoImageTwo= res;
       this.promoImageTwoUrl= res+"";
       //this.promoImageTwoUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
  
  promoImageThree(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageThree = true;
       this.promo.promoImageThree= res;
       this.promoImageThreeUrl= res+"";
       //this.promoImageThreeUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
  
  promoImageFour(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageFour = true;
       this.promo.promoImageFour= res;
       this.promoImageFourUrl= res+"";
       //this.promoImageFourUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }

  backToPromoList(){
    this._router.navigate(['/promo-list']);
  }
  rempovePromo(promImage: String){
    alert(promImage);
    //  this._promoService.rempovePromo(promImage).then((res) => {
    //  }, (err) => {
    //    console.log("error");
    //  });
  }

 }
