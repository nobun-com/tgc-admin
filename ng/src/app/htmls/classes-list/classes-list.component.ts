import { Component,OnInit } from '@angular/core';
import { ClassListService } from './classes-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassListComponent {
  rows = [];

  constructor(private _classListService: ClassListService,private _router :Router) {
   
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
  this._router.navigate(['/htmls/instances-list',obj.id]);
}

editClass(classes) {     
     this._router.navigate(['/htmls/edit-classes',classes.id]);
}

createClass(){
  this._router.navigate(['/htmls/create-classes']);
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