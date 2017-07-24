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
  
getEducators() {
    this._educatorListService.getEducators().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }


   editEducator(educator) {   
     this._router.navigate(['/educator/edit-educator',educator.id]);
  }

  createEducator(){
    this._router.navigate(['/educator/educator']);
  }
 
  deleteEducator(educator) {
    if (confirm("Are you sure you want to delete " + educator.firstName + "?")) {
      this._educatorListService.deleteEducator(educator.id).subscribe(
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
}
