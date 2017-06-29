import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { ClassesListService } from './classes-list.service';


@Component({
  selector: 'classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent {
  rows = [];

  constructor(private _classListService: ClassesListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getClasses();
  }
  
getClasses() {
    this._classListService.getClasses().subscribe(
      data => { 
        console.log(data);
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }
  
getInstances(obj: any){
  this._router.navigate(['/instances-list',obj.id]);
}

editClass(classes) {     
     this._router.navigate(['/classes/edit-classes',classes.id]);
}

createClass(){
  this._router.navigate(['/classes/create-classes']);
}
 
deleteClass(obj: any) {
    if (confirm("Are you sure you want to delete " + obj.className + "?")) {
      console.log(obj.id);
      this._classListService.deleteClass(obj.id).subscribe(
         data => {
           console.log(obj.id);
           this.getClasses();
           return true;
         },
         error => {
           console.error("Error deleting food!");
         }
      );
    }
  } 
}