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
  selector: 'edit-coupon',
  templateUrl: './coupon.component.html' ,
  styleUrls: ['./coupon.component.scss']
})
export class EditCouponComponent {

   coupon : any;
   title:any;
   public form: FormGroup;
   canEdit =true;


     constructor(private fb: FormBuilder,private _couponService: CouponService,private _router :Router,private activatedRoute: ActivatedRoute) {
     this.title = "Update Coupon";
     this.coupon={
       code:'',
       value:0,
       startDate : '',
       expiryDate : ''
      }
     }
   

ngOnInit() {

   this.form = this.fb.group({
      code: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required,CustomValidators.number])],
      startDate: [null, Validators.compose([Validators.required,CustomValidators.date])],
      expiryDate: [null, Validators.compose([Validators.required,CustomValidators.date])]
    });

    this.activatedRoute.params.subscribe((params: Params) => {
        let couponId = params['id'];
          this.getCoupon(couponId);
      });
  }

getCoupon(couponId){
  this._couponService.getById(couponId).subscribe(
      data=>{
        this.coupon = data;
      },
      err =>{
        console.log("error")
      }
  )
}

 createOrUpdateCoupon() {
   
    this._couponService.updateCoupon(this.coupon).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/coupon-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

   backToCouponList(){
  this._router.navigate(['/coupon-list']);
}
 
 }