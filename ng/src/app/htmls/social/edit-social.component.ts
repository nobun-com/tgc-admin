import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { SocialService } from './social.service';
import { Globals } from '../../common/globals';


@Component({
  selector: 'edit-social',
  templateUrl: './social.component.html' ,
  styleUrls: ['./social.component.scss']
})
export class EditSocialComponent {

   social : any;
   pageTitle: any;
   public form: FormGroup;
   senderEmail :String;
   contactEmail : String;
   facebookUrl : String;
   instagramUrl : String;

   

// Center CURD Operation  
 constructor(private fb: FormBuilder,private globals : Globals,private _socialService: SocialService,private activatedRoute: ActivatedRoute,private _router :Router) {
    this.pageTitle = "Update Social";
     this.social={
       senderEmail : '',
       contactEmail : '',
       facebookUrl : '',
       instagramUrl : ''
      }
     }
   

ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let socialId = params['id'];
          this.getSocial(socialId);
      });
     this.form = this.fb.group({
       senderEmail : [null, Validators.compose([Validators.required])],
       contactEmail : [null, Validators.compose([Validators.required])],
       facebookUrl : [null, Validators.compose([Validators.required])],
       instagramUrl : [null, Validators.compose([Validators.required])]
    });
  }

getSocial(socialId){
  this._socialService.getById(socialId).subscribe(
      data=>{
        this.social = data;
      },
      err =>{
        console.log("error")
      }
  )
}


createOrUpdateSocial() {
    this._socialService.updateSocial(this.social).subscribe(
       data => {
         // refresh the list
         alert("Succesfully updated.");
         this._router.navigate(['/social-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

  
  backToSocialList(){
    this._router.navigate(['/social-list']);
  }
 
 }