import { Component,OnInit } from '@angular/core';
import { CentersListService } from './centers-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './centers-list.component.html',
  styleUrls: ['./centers-list.component.scss']
})
export class CentersListComponent {
  rows = [];

  constructor(private _centerListService: CentersListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getCenters();
  }
  
getCenters() {
    this._centerListService.getCenters().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }


editCenter(center) {     
     this._router.navigate(['/centers/edit-centers',center.id]);
}

createCenter(){
  this._router.navigate(['/centers/centers']);
}
 
deleteCenter(center) {
    if (confirm("Are you sure you want to delete " + center.centerName + "?")) {
      this._centerListService.deleteCenter(center.id).subscribe(
         data => {
           this.getCenters();
           return true;
         },
         error => {
           alert("Can't Delete! It is in use.");
           console.error("error");
         }
      );
    }
  } 


  config: any;
  columns: any;
  temp = [];
  temp2 = this.rows; // this the new temp array
  table = {
   offset: 0,
  };

   updateFilter(event) {
   const val = event.target.value.toLowerCase();
   this.rows = [...this.temp2]; // and here you have to initialize it with your data
   this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function(d) {
      return d.centerName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
 }
}
