import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { BookingListService } from './booking-list.service';


@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent {
  rows = [];
  params : any;

  constructor(private _bookingListService: BookingListService,private _router :Router) {
    this.params={
      fromDate : '',
      toDate : ''
    }
  }


applyFilterOnTable(fromDate,toDate){
  this.params.fromDate=fromDate;
  this.params.toDate=toDate;
con
  this._bookingListService.getBookingsByDate(this.params).subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }

ngOnInit() {
    this.getBookings();
  }
  
getBookings() {
    this._bookingListService.getBookings().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }
}