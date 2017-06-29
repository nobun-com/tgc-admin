import { Routes } from '@angular/router';
import { CreateClassesComponent } from './create-classes.component';
import { EditClassesComponent } from './edit-classes.component';

export const ClassesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'create-classes',
      component: CreateClassesComponent
    },
    {
      path: 'edit-classes/:id',
      component: EditClassesComponent
    }
    ]
  }
];
