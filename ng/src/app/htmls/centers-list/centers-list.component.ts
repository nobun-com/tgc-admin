import { Component,OnInit } from '@angular/core';
import { CentersListService } from './centers-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './centers-list.component.html',
  styleUrls: ['./centers-list.component.scss']
})
export class CentersListComponent {
  center : any;
  centers = [];
  isDataAvailable : boolean = false;
  constructor(private _centerListService: CentersListService,private _router :Router) {
   this.center={
       centerName:'',
       about : '',
       addressLine1 : '',
       addressLine2 : '',
       area : '',
       district : '',
       amenities : '',
       logoUrl : '',
       logoName : ''
      }
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
    centerName: {
      title: 'Center Name'
    },
    addressLine1: {
      title: 'Address'
    },
    area: {
      title: 'Area'
    },
    district: {
      title: 'District'
    }
  }
};

ngOnInit() {
    this.getCenters();
  }
  
getCenters() {
    
    this._centerListService.getCenters().subscribe(
      data => { 
        this.centers = [];
        for(var i=0; i<data.length;i++){
          this.center={};
          this.center.id = data[i].id;
          this.center.centerName = data[i].centerName;
          this.center.addressLine1 = data[i].address.addressLine1;
          this.center.addressLine2 = data[i].address.addressLine2;
          this.center.area = data[i].address.area;
          this.center.district = data[i].address.district;
          this.centers.push(this.center)
        }
        this.isDataAvailable=true;
      },
      err => { console.log("error") }
    );
  }


createCenter(){
  this._router.navigate(['/centers/centers']);
}
 

onCustom(event) {
   if(event.action == 'delete'){
     if (confirm("Are you sure you want to delete " + event.data.centerName + "?")) {
      this._centerListService.deleteCenter(event.data.id).subscribe(
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
  if(event.action == 'edit'){
      this._router.navigate(['/centers/edit-centers',event.data.id]);
   }
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }

}
