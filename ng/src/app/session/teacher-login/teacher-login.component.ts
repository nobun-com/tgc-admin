import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { TeacherLoginService } from './teacher-login.service';
import { CustomValidators } from 'ng2-validation';
import { Globals } from '../../common/globals';

@Component({
  selector: 'teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  public form: FormGroup;
  teacher : any={};
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private router: Router,private teacherLoginService:TeacherLoginService) {
     this.teacher ={
      email : '',
      password : ''
    }

     //this.adminLoginService.logout();
  }

  ngOnInit() {
       this.form = this.fb.group ( {
      uname: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  
  login() {
        this.loading = true;
        this.teacherLoginService.login(this.teacher)
            .subscribe(result => {
                if (result === true) {
                    // this.router.navigate(['/']);
                     this.router.navigate ( [ '/' ] );
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }

  

}
