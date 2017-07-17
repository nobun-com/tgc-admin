import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { PromoService } from './promo.service';
import { Globals } from '../../common/globals';


@Component({
  selector: 'edit-promo',
  templateUrl: './promo.component.html' ,
  styleUrls: ['./promo.component.scss']
})
export class EditPromoComponent {

   promo : any;
   pageTitle: any;
   fileToUpload: Array<File>;
   public form: FormGroup;
   public centers : any;
   uploadPromoImageOne : boolean = false;
   uploadPromoImageTwo :  boolean = false;
   uploadPromoImageThree :  boolean = false;
   uploadPromoImageFour :  boolean = false;
   termsCharLeft : any;
   promoImageOneUrl :String;
   promoImageTwoUrl : String;
   promoImageThreeUrl : String;
   promoImageFourUrl : String;

   

// Center CURD Operation  
 constructor(private fb: FormBuilder,private globals : Globals,private _promoService: PromoService,private activatedRoute: ActivatedRoute,private _router :Router) {
    this.pageTitle = "Update Promo";
     this.promo={
       centerOneId : '',
       centerTwoId : '',
       centerThreeId : '',
       centerFourId : '',
       promoImageOne : '',
       promoImageTwo : '',
       promoImageThree : '',
       promoImageFour : ''
      }
     }
   

ngOnInit() {
    this.getCenters();
    this.activatedRoute.params.subscribe((params: Params) => {
        let promoId = params['id'];
          this.getPromo(promoId);
      });
     this.form = this.fb.group({
       centerOneId : ['', Validators.required],
       centerTwoId : ['', Validators.required],
       centerThreeId : ['', Validators.required],
       centerFourId : ['', Validators.required],
       promoImageOne :[],
       promoImageTwo : [],
       promoImageThree : [],
       promoImageFour : []
    });
  }

getPromo(promoId){
  this._promoService.getById(promoId).subscribe(
      data=>{
        this.promo = data;

        if(this.promo.promoImageOne != ''){
          this.promoImageOneUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageOne;
          this.uploadPromoImageOne = true;
        }
        if(this.promo.promoImageTwo != ''){
          this.promoImageTwoUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageTwo;
          this.uploadPromoImageTwo = true;
        }
        if(this.promo.promoImageThree != ''){
          this.promoImageThreeUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageThree;
          this.uploadPromoImageThree = true;
        }
        if(this.promo.promoImageFour != ''){
          this.promoImageFourUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageFour;
          this.uploadPromoImageFour = true;
        }
      },
      err =>{
        console.log("error")
      }
  )
}



getCenters(){
  this._promoService.getCenters().subscribe(
      data => { 
        this.centers = data;
    },
      err => { console.log("error",err) }
  );
}
createOrUpdatePromo() {
    this._promoService.updatePromo(this.promo).subscribe(
       data => {
         // refresh the list
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
       this.promoImageOneUrl= this.globals.SERVERADDRESS+"getImage/"+res;
     }, (err) => {
       console.log("error");
     });
  }
  promoImageTwo(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageTwo = true;
       this.promo.promoImageTwo= res;
       this.promoImageTwoUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
  
  promoImageThree(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageThree = true;
       this.promo.promoImageThree= res;
       this.promoImageThreeUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }
  
  promoImageFour(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._promoService.uploadImage(this.fileToUpload).then((res) => {
       this.uploadPromoImageFour = true;
       this.promo.promoImageFour= res;
       this.promoImageFourUrl= this.globals.SERVERADDRESS+"getImage/"+res;
       
     }, (err) => {
       console.log("error");
     });
  }

  backToPromoList(){
    this._router.navigate(['/promo-list']);
  }
 
 }