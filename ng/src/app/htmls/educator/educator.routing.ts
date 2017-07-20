import { Routes } from '@angular/router';
import { EducatorComponent } from './educator.component';
import { EditEducatorComponent } from './edit-educator.component';

export const EducatorRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'educator',
      component: EducatorComponent
    },
    {
      path: 'edit-educator/:id',
      component: EditEducatorComponent
    }
    ]
  }
];
