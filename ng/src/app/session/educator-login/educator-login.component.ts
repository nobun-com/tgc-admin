import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { EducatorLoginService } from './educator-login.service';
import { CustomValidators } from 'ng2-validation';
import { Globals } from '../../common/globals';

@Component({
  selector: 'educator-login',
  templateUrl: './educator-login.component.html',
  styleUrls: ['./educator-login.component.scss']
})
export class EducatorLoginComponent implements OnInit {

  public form: FormGroup;
  educator : any={};
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private router: Router,private educatorLoginService:EducatorLoginService) {
     this.educator ={
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
        this.educatorLoginService.login(this.educator)
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
