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
   

ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let promoId = params['id'];
          this.getPromo(promoId);
      });
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

getPromo(promoId){
  this._promoService.getById(promoId).subscribe(
      data=>{
        this.promo = data;

        if(this.promo.promoImageOne != ''){
          //this.promoImageOneUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageOne;
          this.uploadPromoImageOne = true;
          this.promoImageOneUrl=this.promo.promoImageOne;
        }
        if(this.promo.promoImageTwo != ''){
          //this.promoImageTwoUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageTwo;
          this.uploadPromoImageTwo = true;
          this.promoImageTwoUrl= this.promo.promoImageTwo;
        }
        if(this.promo.promoImageThree != ''){
          //this.promoImageThreeUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageThree;
          this.uploadPromoImageThree = true;
          this.promoImageThreeUrl= this.promo.promoImageThree;
        }
        if(this.promo.promoImageFour != ''){
          //this.promoImageFourUrl= this.globals.SERVERADDRESS+"getImage/"+this.promo.promoImageFour;
          this.uploadPromoImageFour = true;
          this.promoImageFourUrl= this.promo.promoImageFour;
        }
      },
      err =>{
        console.log("error")
      }
  )
}


createOrUpdatePromo() {
    this._promoService.updatePromo(this.promo).subscribe(
       data => {
         // refresh the list
         alert("Succesfully updated.");
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

  removePromo(promImage: String){
     if(promImage=='promoImageOne'){
       this.promo.promoUrlOne='';
       this.promo.promoImageOne='';
     }if(promImage=='promoImageTwo'){
      this.promo.promoUrlTwo='';
      this.promo.promoImageTwo='';
    }if(promImage=='promoImageThree'){
      this.promo.promoUrlThree='';
      this.promo.promoImageThree='';
    }if(promImage=='promoImageFour'){
      this.promo.promoUrlFour='';
      this.promo.promoImageFour='';
    } 

    this._promoService.updatePromo(this.promo).subscribe(
      data => {
        // refresh the list
        alert("Succesfully updated.");
        this._router.navigate(['/promo-list']);
        return true;
      },
      error => {
        console.error("error");
        return Observable.throw(error);
      }
   );
 }
 
 }