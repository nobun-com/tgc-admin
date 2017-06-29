import { Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { EditTeacherComponent } from './edit-teacher.component';

export const TeacherRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'teacher',
      component: TeacherComponent
    },
    {
      path: 'edit-teacher/:id',
      component: EditTeacherComponent
    }
    ]
  }
];
