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
  selector: 'teacher',
  templateUrl: './teacher.component.html' ,
  styleUrls: ['./teacher.component.scss']
})

export class TeacherComponent implements OnInit{

   teacher : any;
   title: any;
   
  public form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required])],
      lname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      phone: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    });
  }

// Center CURD Operation  
  constructor(private fb: FormBuilder,private _teacherService: TeacherService,private _router :Router) {
     this.title = "Create New Teacher";
     this.teacher={
       firstName:'',
       lastName:'',
       email : '',
       gender : '',
       password : '',
       confirmPassword : '',
       phone :''
      }
     }
   


createOrUpdateTeacher() {
   
    this._teacherService.createTeacher(this.teacher).subscribe(
       data => {
         // refresh the list
         this._router.navigate(['/teacher-list']);
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }


   backToTeacherList(){
    this._router.navigate(['/teacher-list']);
  }

 }