import { Routes } from '@angular/router';
import { CouponComponent } from './coupon.component';
import { EditCouponComponent } from './edit-coupon.component';

export const CouponRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'coupon',
      component: CouponComponent
    },
    {
      path: 'edit-coupon/:id',
      component: EditCouponComponent
    }
    ]
  }
];
