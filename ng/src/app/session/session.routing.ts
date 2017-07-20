import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EducatorLoginComponent } from './educator-login/educator-login.component';


export const SessionRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '404',
      component: NotFoundComponent
    }, {
      path: 'error',
      component: ErrorComponent
    }, {
      path: 'forgot',
      component: ForgotComponent
    }, {
      path: 'lockscreen',
      component: LockscreenComponent
    }, {
      path: 'signin',
      component: SigninComponent
    }, {
      path: 'signup',
      component: SignupComponent
    },{
      path: 'admin-login',
      component: AdminLoginComponent
    },{
      path: 'educator-login',
      component: EducatorLoginComponent
    }
    ]
  }
];
