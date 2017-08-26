import { Component,OnInit } from '@angular/core';
import { SocialListService } from './social-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-table-paging',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent {
  rows = [];

  constructor(private _socialListService: SocialListService,private _router :Router,public dialog: MdDialog) {
   
  }


ngOnInit() {
    this.getSocials();
  }
  
getSocials() {
    this._socialListService.getSocials().subscribe(
      data => { 
        this.rows = data;
        if(this.rows.length > 0){
        var id=data[0].id;
          this._router.navigate(['/social/edit-social',id]);
        }else{
          this._router.navigate(['/social/social']);
        }
      },
      err => { console.log("error") }
    );
  }


   editSocial(social) {   
     this._router.navigate(['/social/edit-social',social.id]);
  }

  createSocial(){
    this._router.navigate(['/social/social']);
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


   deleteSocial(social) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._socialListService.deleteSocial(social.id).subscribe(
         data => {
           this.getSocials();
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
