import { Routes } from '@angular/router';
import { CentersComponent } from './centers.component';
import { EditCentersComponent } from './edit-centers.component';

export const CentersRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'centers',
      component: CentersComponent
    },
    {
      path: 'edit-centers/:id',
      component: EditCentersComponent
    }
    ]
  }
];
