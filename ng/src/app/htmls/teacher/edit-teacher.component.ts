import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { TeacherService } from './teacher.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'edit-teacher',
  templateUrl: './teacher.component.html' ,
  styleUrls: ['./teacher.component.scss']
})
export class EditTeacherComponent implements OnInit{

   teacher : any;
   title: any;
   
  public form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      lname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required,CustomValidators.number,CustomValidators.rangeLength([10, 10])])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });

    this.activatedRoute.params.subscribe((params: Params) => {
        let teacherId = params['id'];
          this.getTeacher(teacherId);
      });
  }

// Center CURD Operation  
 constructor(private fb: FormBuilder,private _teacherService: TeacherService,private activatedRoute: ActivatedRoute,private _router :Router) {
       this.title = "Update Teacher";
     this.teacher={
       firstName:'',
       lastName:'',
       email : '',
       gender : '',
       password : '',
       phone :'',
       confirmPassword : ''
      }
     }
   

getTeacher(teacherId){
  this._teacherService.getById(teacherId).subscribe(
      data=>{
        this.teacher = data;
        this.teacher.confirmPassword=this.teacher.password;
      },
      err =>{
        console.log("error")
      }
  )
}

 createOrUpdateTeacher() {
   
    this._teacherService.updateTeacher(this.teacher).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/teacher-list']);
         return true;
       },
       error => {
         console.error("error");
         return Observable.throw(error);
       }
    );
  }

   backToTeacherList(){
    this._router.navigate(['/teacher-list']);
  }
 
 }