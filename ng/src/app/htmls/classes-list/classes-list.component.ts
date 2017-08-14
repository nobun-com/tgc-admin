import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { ClassesListService } from './classes-list.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent {
  rows = [];

  constructor(private datePipe: DatePipe,private _classListService: ClassesListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getClasses();
  }
  


settings = {
 actions: {
      add : false,
      edit : false,
      delete : false,
      position : 'right',
      custom: [
        {
          name: 'view',
          title: 'View '
        },
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
    // center: {
    //   title: 'Center',
    //   valuePrepareFunction: (center) => { 
    //     return center.centerName; 
    //   }
    // },
    className: {
      title: 'Name'
    },
    startDate: {
      title: 'Start Date',
      valuePrepareFunction: (startDate) => { 
        var raw = new Date(startDate);

        var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
        return formatted; 
      }
    },
    endDate: {
      title: 'End Date',
      valuePrepareFunction: (endDate) => { 
        var raw = new Date(endDate);

        var formatted = this.datePipe.transform(raw, 'dd-MM-yyyy');
        return formatted; 
      }
    },
    frequency: {
      title: 'Frequency'
    }
  }
};
  
getClasses() {
    this._classListService.getClasses().subscribe(
      data => { 
        this.rows = data;
        console.log(this.rows)
      },
      err => { console.log("error") }
    );
  }
  

createClass(){
  this._router.navigate(['/classes/create-classes']);
}
 

  onCustom(event) {
   if(event.action == 'delete'){
     if (confirm("Are you sure you want to delete " +event.data.className + "?")) {
      this._classListService.deleteClass(event.data.id).subscribe(
         data => {
           this.getClasses();
           return true;
         },
         error => {
           console.error("error");
         }
      );
    }
   }
  if(event.action == 'view'){
     this._router.navigate(['/instances-list',event.data.id]);
   }
   if(event.action == 'edit'){
      this._router.navigate(['/classes/edit-classes',event.data.id]);
   }
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }
}