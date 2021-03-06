import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SessionRoutes } from './session.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLoginService } from './admin-login/admin-login.service';
import { EducatorLoginComponent } from './educator-login/educator-login.component';
import { EducatorLoginService } from './educator-login/educator-login.service';
import { Globals } from '../common/globals';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    NotFoundComponent,
    ErrorComponent,
    ForgotComponent,
    LockscreenComponent,
    SigninComponent,
    SignupComponent,
    AdminLoginComponent,
    EducatorLoginComponent
    
  ],
  providers: [
    AdminLoginService,
    EducatorLoginService,
    Globals

  ]
})

export class SessionModule {}
