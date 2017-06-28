import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AdminLoginService } from './admin-login.service';
import { CustomValidators } from 'ng2-validation';
import { Globals } from '../../common/globals';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public form: FormGroup;
  admin : any={};
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private router: Router,private adminLoginService:AdminLoginService) {
     this.admin ={
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
        this.adminLoginService.login(this.admin)
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
