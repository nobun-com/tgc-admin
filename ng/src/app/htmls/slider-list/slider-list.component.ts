import { Component,OnInit } from '@angular/core';
import { SliderListService } from './slider-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent {
  rows = [];

  constructor(private _sliderListService: SliderListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getSliders();
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
    title: {
      title: 'Title',
    },
    description: {
      title: 'Description',
    },
    urlTitle: {
      title: 'Url Uitle',
    },
    url: {
      title: 'Url',
    }
  }
};  
getSliders() {
    this._sliderListService.getSliders().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }



  createSlider(){
    this._router.navigate(['/slider/slider']);
  }
 
onCustom(event) {
   if(event.action == 'delete'){
     if (confirm("Are you sure you want to deletel?")) {
      this._sliderListService.deleteSlider(event.data.id).subscribe(
         data => {
           this.getSliders();
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
     this._router.navigate(['/slider/edit-slider',event.data.id]);
   }
    // alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`);
  }
}
