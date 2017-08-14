import { Component,OnInit } from '@angular/core';
import { EducatorListService } from './educator-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './educator-list.component.html',
  styleUrls: ['./educator-list.component.scss']
})
export class EducatorListComponent {
  rows = [];

  constructor(private _educatorListService: EducatorListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getEducators();
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
    firstName: {
      title: 'First Name',
    },
    lastName: {
      title: 'Last Name',
    },
    email: {
      title: 'Email',
    },
    gender: {
      title: 'Gender',
    },
    phone: {
      title: 'Phone',
    },
  }
};  
getEducators() {
    this._educatorListService.getEducators().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }



  createEducator(){
    this._router.navigate(['/educator/educator']);
  }
 
onCustom(event) {
   if(event.action == 'delete'){
     if (confirm("Are you sure you want to delete " + event.data.firstName + "?")) {
      this._educatorListService.deleteEducator(event.data.id).subscribe(
         data => {
           this.getEducators();
           return true;
         },
         error => {
           alert("Can't Delete! It is in use.");
           console.error("error");
         }
      );
    }
   }
  if(event.action == 'edit'){
     this._router.navigate(['/educator/edit-educator',event.data.id]);
   }
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }
}
