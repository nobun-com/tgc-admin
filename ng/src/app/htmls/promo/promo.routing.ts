import { Routes } from '@angular/router';
import { PromoComponent } from './promo.component';
import { EditPromoComponent } from './edit-promo.component';

export const PromoRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'promo',
      component: PromoComponent
    },
    {
      path: 'edit-promo/:id',
      component: EditPromoComponent
    }
    ]
  }
];
