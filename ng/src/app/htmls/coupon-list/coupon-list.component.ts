import { Component,OnInit } from '@angular/core';
import { CouponListService } from './coupon-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent {
  rows = [];

  constructor(private _couponListService: CouponListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getCoupons();
  }
  
getCoupons() {
    this._couponListService.getCoupons().subscribe(
      data => { 
        console.log(data);
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }


   editCoupon(coupon) {   
     this._router.navigate(['/coupon/edit-coupon',coupon.code]);
  }

  createCoupon(){
    this._router.navigate(['/coupon/coupon']);
  }
 
  deleteCoupon(coupon) {
    if (confirm("Are you sure you want to delete " + coupon.code + "?")) {
      console.log(coupon);
      this._couponListService.deleteCoupon(coupon.code).subscribe(
         data => {
           console.log(coupon.id);
           this.getCoupons();
           return true;
         },
         error => {
           console.error("Error deleting food!");
         }
      );
    }
  } 
}
