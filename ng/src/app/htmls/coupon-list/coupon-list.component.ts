import { Component,OnInit } from '@angular/core';
import { CouponListService } from './coupon-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-table-paging',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent {
  rows = [];

  constructor(private datePipe: DatePipe,private _couponListService: CouponListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getCoupons();
  }


settings = {
 actions: {
      add : false,
      edit : false,
      delete : false,
      position : 'right',
      custom: [
        {
          name: 'edit',
          title: 'Edit '
        },
        {
          name: 'delete',
          title: 'Delete '
        }
      ],
    },
  columns: {
    // id: {
    //   title: 'ID'
    // },
    code: {
      title: 'Code',
    },
    value: {
      title: 'Value (In HKD)',
    },
    startDate: {
      title: 'Start Date',
       valuePrepareFunction: (startDate) => { 
        var raw = new Date(startDate);

        var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
        return formatted; 
      }
    },
    expiryDate: {
      title: 'Expiry Date',
       valuePrepareFunction: (expiryDate) => { 
        var raw = new Date(expiryDate);

        var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
        return formatted; 
      }
    }
  }
};  
getCoupons() {
    this._couponListService.getCoupons().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }

  createCoupon(){
    this._router.navigate(['/coupon/coupon']);
  }

  onCustom(event) {
   if(event.action == 'delete'){
     if (confirm("Are you sure you want to delete " +event.data.code + "?")) {
      this._couponListService.deleteCoupon(event.data.code).subscribe(
         data => {
           this.getCoupons();
           return true;
         },
         error => {
           console.error("error");
         }
      );
    }
   }
  if(event.action == 'edit'){
       this._router.navigate(['/coupon/edit-coupon',event.data.code]);
   }
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }
}
