import { Component,OnInit } from '@angular/core';
import { PromoListService } from './promo-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-table-paging',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent {
  rows = [];
  canCreate =true;

  constructor(private _promoListService: PromoListService,private _router :Router,public dialog: MdDialog) {
   
  }


ngOnInit() {
    this.getPromos();
  }
  
getPromos() {
    this._promoListService.getPromos().subscribe(
      data => { 
        this.rows = data;
        if(this.rows.length > 0){
          this.canCreate=false;
        }else{
          this.canCreate=true;
        }
      },
      err => { console.log("error") }
    );
  }


   editPromo(promo) {   
     this._router.navigate(['/promo/edit-promo',promo.id]);
  }

  createPromo(){
    this._router.navigate(['/promo/promo']);
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


   deletePromo(promo) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._promoListService.deletePromo(promo.id).subscribe(
         data => {
           this.getPromos();
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
