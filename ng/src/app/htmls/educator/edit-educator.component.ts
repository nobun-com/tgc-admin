import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { EducatorService } from './educator.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'edit-educator',
  templateUrl: './educator.component.html' ,
  styleUrls: ['./educator.component.scss']
})
export class EditEducatorComponent implements OnInit{

   educator : any;
   title: any;
   
  public form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required])],
      lname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required,CustomValidators.number,CustomValidators.rangeLength([10, 10])])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });

    this.activatedRoute.params.subscribe((params: Params) => {
        let educatorId = params['id'];
          this.getEducator(educatorId);
      });
  }

// Center CURD Operation  
 constructor(private fb: FormBuilder,private _educatorService: EducatorService,private activatedRoute: ActivatedRoute,private _router :Router) {
       this.title = "Update Educator";
     this.educator={
       firstName:'',
       lastName:'',
       email : '',
       gender : '',
       password : '',
       phone :'',
       confirmPassword : ''
      }
     }
   

getEducator(educatorId){
  this._educatorService.getById(educatorId).subscribe(
      data=>{
        this.educator = data;
        this.educator.confirmPassword=this.educator.password;
      },
      err =>{
        console.log("error")
      }
  )
}

 createOrUpdateEducator() {
   
    this._educatorService.updateEducator(this.educator).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/educator-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

   backToEducatorList(){
    this._router.navigate(['/educator-list']);
  }
 
 }