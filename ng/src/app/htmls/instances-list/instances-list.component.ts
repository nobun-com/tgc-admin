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
  
  getInstances(classId){
  this._instancesListService.getInstances(classId).subscribe(
      data=>{
        this.rows= data;
        console.log(this.rows);
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