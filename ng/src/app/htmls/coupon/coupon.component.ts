import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { CouponService } from './coupon.service';


// const URL = '/api/';
const URL = 'http://localhost:8080/api/';

@Component({
  selector: 'coupon',
  templateUrl: './coupon.component.html' ,
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {

   coupon : any;
   title: any;
   
 
   public form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      code: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required])],
      startDate: [null, Validators.compose([Validators.required])],
      expiryDate: [null, Validators.compose([Validators.required])]
    });
  } 

// Center CURD Operation  
  constructor(private fb: FormBuilder,private _couponService: CouponService,private _router :Router) {
     this.title = "Create New Coupon";
     this.coupon={
       code:'',
       value:0,
       startDate : '',
       expiryDate : ''
      }
     }
   


createOrUpdateCoupon() {
   
    this._couponService.createCoupon(this.coupon).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/htmls/coupon-list']);
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

   backToCouponList(){
  this._router.navigate(['/htmls/coupon-list']);
}

 }