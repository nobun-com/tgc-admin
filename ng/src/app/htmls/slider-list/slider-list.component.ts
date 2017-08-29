import { Component,OnInit } from '@angular/core';
import { SliderListService } from './slider-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-table-paging',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent {
  rows = [];

  constructor(private _sliderListService: SliderListService,private _router :Router,public dialog: MdDialog) {
   
  }


ngOnInit() {
    this.getSliders();
  }
  
getSliders() {
    this._sliderListService.getSliders().subscribe(
      data => { 
        this.rows = data;
        if(this.rows.length > 0){
        var id=data[0].id;
          this._router.navigate(['/slider/edit-slider',id]);
        }else{
          this._router.navigate(['/slider/slider']);
        }
      },
      err => { console.log("error") }
    );
  }


   editSlider(slider) {   
     this._router.navigate(['/slider/edit-slider',slider.id]);
  }

  createSlider(){
    this._router.navigate(['/slider/slider']);
  }
 
  dialogRef: MdDialogRef<ConfirmDialogComponent>;
  config: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };


   deleteSlider(slider) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._sliderListService.deleteSlider(slider.id).subscribe(
         data => {
           this.getSliders();
           return true;
         },
         error => {
           console.error("Error deleting food!");
         }
      );
      }
      this.dialogRef = null;
    });
  }

}
