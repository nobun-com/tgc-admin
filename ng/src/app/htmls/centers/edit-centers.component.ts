import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { CentersService } from './centers.service';
import { Globals } from '../../common/globals';
import { ExtraValidators } from '../../common/extraValidators.component';


@Component({
  selector: 'edit-centers',
  templateUrl: './centers.component.html' ,
  styleUrls: ['./centers.component.scss']
})
export class EditCentersComponent implements OnInit{

   center : any;
   center_error:Boolean = false;
   objAreaAndDistrict : any;
   areas : any;
   districts : any;
   title:any;
   aboutCharLeft : any;
   amenitiesCharLeft : any;
   fileToUpload: Array<File>;
   uploadFile : boolean = false;
    isAreaChanged = false;

// Center CURD Operation  
  constructor(private fb: FormBuilder,private globals : Globals,private _centerService: CentersService,private activatedRoute: ActivatedRoute,private _router :Router) {
     this.title = "Update Center";
     this.center={
      centerName:'',
       about : '',
       address: { 
       addressLine1 : '',
       addressLine2 : '',
       area : '',
       district : '',
       amenities : '',
       logoUrl : '',
       logoName : ''
      }
     }
   }

  public form: FormGroup;


ngOnInit() {
  this.form = this.fb.group({
      centerName: [null, Validators.compose([Validators.required])],
      addressLine1: [null, Validators.compose([Validators.required])],
      area: [null, Validators.required],
      district: [null, Validators.required],
      amenities: [],
      addressLine2: [],
      about : []
    });
  
    this.getAreaAndDistrict();
     // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        let centerId = params['id'];
          this.getCenter(centerId);
      });
  }
 countAboutChars() {
    this.aboutCharLeft = 300 - this.center.about.length;
  }

countAmenitiesChars() {
    this.amenitiesCharLeft = 300 - this.center.amenities.length;
  }
getCenter(centerId){
  this._centerService.getById(centerId).subscribe(
      data=>{
        this.getDistricts(data.address.area);
        if(this.center.logoUrl != ''){
          this.uploadFile = true;
        }
  //      this.center.logoUrl=this.globals.SERVERADDRESS +"getImage/";

      setTimeout(()=>{  
          this.center = data;
        }, 1000);
      },
      err =>{
        console.log("error")
      }
  )
}

// get Areas Method 
getAreaAndDistrict()
{
  this._centerService.getAreaAndDistrict().subscribe(
      data => { 
        this.objAreaAndDistrict = data;
         this.areas=data.allAreas;
      }, 
      err => { console.log("error"); }
    );
}

// get Districts method on change of area
getDistricts(selectedArea){
  this.isAreaChanged = true;
  this.districts= this.objAreaAndDistrict[selectedArea];
}



 createOrUpdateCenter() {
    this._centerService.updateCenter(this.center).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/centers-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

  fileChangeEvent(fileInput: any){
    this.fileToUpload = <Array<File>> fileInput.target.files;
     this._centerService.uploadLogo(this.fileToUpload).then((res) => {
       this.center.logoUrl= res;
       //this.center.logoUrl=this.globals.SERVERADDRESS +"getImage/";
       this.uploadFile = true;
     }, (err) => {
       console.log("error");
     });
  }
 
 
 backToCenterList(){
  this._router.navigate(['/centers-list']);
}

changeDistrict(){
  this.isAreaChanged = false;
}

 }