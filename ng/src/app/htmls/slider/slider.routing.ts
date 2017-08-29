import { Routes } from '@angular/router';
import { SliderComponent } from './slider.component';
import { EditSliderComponent } from './edit-slider.component';

export const SliderRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'slider',
      component: SliderComponent
    },
    {
      path: 'edit-slider/:id',
      component: EditSliderComponent
    }
    ]
  }
];
