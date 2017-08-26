import { Routes } from '@angular/router';
import { SocialComponent } from './social.component';
import { EditSocialComponent } from './edit-social.component';

export const SocialRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'social',
      component: SocialComponent
    },
    {
      path: 'edit-social/:id',
      component: EditSocialComponent
    }
    ]
  }
];
