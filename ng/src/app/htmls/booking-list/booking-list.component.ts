import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { BookingListService } from './booking-list.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent {
  params : any;
  role : string;
  userId : String ;
  booking : any;
  bookings = [];
  isDataAvailable : boolean = false;
  constructor(private datePipe: DatePipe,private _bookingListService: BookingListService,private _router :Router) {
    this.params={
      fromDate : '',
      toDate : '',
      userId : '',
      role : ''
    }
    this.booking={
       className:'',
       bookingDate : '',
       fees : '',
       user : '',
       coupon : '',
       totalPaid : ''
      }
  }

settings = {
 actions: {
      add : false,
      edit : false,
      delete : false
    },
  columns: {
    // id: {
    //   title: 'ID'
    // },
    className: {
      title: 'Class Name'
    },
    bookingDate: {
      title: 'Booking Date',
      valuePrepareFunction: (bookingDate) => { 
        var raw = new Date(bookingDate);

        var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
        return formatted; 
      }
    },
    user: {
      title: 'User'
    },
    fees: {
      title: 'Fees (In HKD)'
    },
    coupon: {
      title: 'Coupon'
    },
    totalPaid: {
      title: 'Total Paid (In HKD)'
    }
  }
};

applyFilterOnTable(fromDate,toDate){
  this.params.fromDate=fromDate;
  this.params.toDate=toDate;
  this.params.userId=this.userId;
  this.params.role=this.role;
  this.bookings=[];
  this.isDataAvailable=false;
  this._bookingListService.getBookingsByDate(this.params).subscribe(
      data => {
        for(var i=0; i<data.length;i++){
        console.log(data[i]);
          this.booking={};
         this.booking.className = data[i][1];
          this.booking.bookingDate = data[i][0];
          this.booking.user = data[i][4];
          this.booking.fees = data[i][5];
          this.booking.coupon = data[i][6];
          this.booking.totalPaid = data[i][7];

          this.bookings.push(this.booking)
        }
        this.isDataAvailable=true;
      },
      err => { console.log("error") }
    );
  }

ngOnInit() {
     this.role  = Cookie.get('role');
     this.userId  = Cookie.get('userId');
     if(this.role=='admin'){
       this.getAllBookings();
     }else{
       this.getBookingsByEducator(this.userId);
     }
  }

getAllBookings() {
      this.bookings=[];
    this.isDataAvailable=false;
    this._bookingListService.getAllBookings().subscribe(
      data => {
        for(var i=0; i<data.length;i++){
        console.log(data[i]);
          this.booking={};
          this.booking.className = data[i][1];
          this.booking.bookingDate = data[i][0];
          this.booking.user = data[i][4];
          this.booking.fees = data[i][5];
          this.booking.coupon = data[i][6];
          this.booking.totalPaid = data[i][7];

          this.bookings.push(this.booking)
        }
        this.isDataAvailable=true;
      },
      err => { console.log("error") }
    );
  }
  getBookingsByEducator(userId) {
    this.bookings=[];
    this.isDataAvailable=false;
    this._bookingListService.getBookingsByEducator(userId).subscribe(
      data => {
        for(var i=0; i<data.length;i++){
          this.booking={};
          this.booking.className = data[i][1];
          this.booking.bookingDate = data[i][0];
          this.booking.user = data[i][4];
          this.booking.fees = data[i][5];
          this.booking.coupon = data[i][6];
          this.booking.totalPaid = data[i][7];

          this.bookings.push(this.booking)
        }
        this.isDataAvailable=true;
      },
      err => { console.log("error") }
    );
  }
}