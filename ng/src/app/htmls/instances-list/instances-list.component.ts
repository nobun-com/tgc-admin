import { Component,OnInit } from '@angular/core';
import { InstancesListService } from './instances-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'instances-list',
  templateUrl: './instances-list.component.html',
  styleUrls: ['./instances-list.component.scss']
})
export class InstancesListComponent {
  rows = [];

  constructor(private _instancesListService: InstancesListService,private activatedRoute: ActivatedRoute,private _router :Router) {
   
  }


ngOnInit() {
     this.activatedRoute.params.subscribe((params: Params) => {
        let classId = params['id'];
          this.getInstances(classId);
      });
  }
  
  settings = {
 actions: {
      add : false,
      edit : false,
      delete : false
    },
  columns: {
    // id: {
    //   title: 'ID'
    // },
    date: {
      title: 'Date',
    },
    day: {
      title: 'Day',
    },
    time: {
      title: 'Time',
    },
    slots: {
      title: 'Slots',
    }
  }
};  
  getInstances(classId){
  this._instancesListService.getInstances(classId).subscribe(
      data=>{
        this.rows= data;
      },
      err =>{
        console.log("error")
      }
  )
}
  backToClassList(){
  this._router.navigate(['/classes-list']);
}

}