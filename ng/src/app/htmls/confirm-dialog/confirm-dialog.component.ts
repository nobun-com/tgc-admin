import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  template: `
  <h5 class="mt-0" style="margin-bottom:40px;">Are you sure you want to delete?</h5>
 
  <button  md-raised-button md-button-sm color="primary" class="mr-1" (click)="dialogRef.close(false)">Cancel</button><button  md-raised-button md-button-sm color="warn" class="mr-1" (click)="dialogRef.close(true)" style="float:right;">Yes</button>`
})


export class ConfirmDialogComponent {
  constructor(public dialogRef: MdDialogRef <ConfirmDialogComponent> ) {}
}




