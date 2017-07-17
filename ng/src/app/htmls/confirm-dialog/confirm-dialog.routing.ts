import { Routes } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog.component';
export const ConfirmDialogRoutes: Routes = [
  {
    path: 'confirm-dialog',
    children: [{
      path: 'category',
      component: ConfirmDialogComponent
    }
    ]
  }
];
