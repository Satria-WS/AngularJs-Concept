import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptComponent } from './concept/concept.component';
import { InterpolationComponent } from './concept/interpolation/interpolation.component';
import { TwoWayBindingComponent } from './concept/two-way-binding/two-way-binding.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'concept',
    component: ConceptComponent,
    children: [
      {
        path: 'interpolation',
        component: InterpolationComponent,
      },
      {
        path: 'two-way-binding',
        component: TwoWayBindingComponent,
      }
    ],
  },
];
