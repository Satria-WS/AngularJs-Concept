import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptComponent } from './concept/concept.component';
import { InterpolationComponent } from './concept/interpolation/interpolation.component';
import { TwoWayBindingComponent } from './concept/two-way-binding/two-way-binding.component';
import { DirectiveComponent } from './concept/directive/directive.component';
import { PipexComponent } from './concept/pipex/pipex.component';
import { ParentToChildComponent } from './concept/parent-to-child/parent-to-child.component';
import { BooksComponent } from './books/books.component';
import { ListeningCustomEventComponent } from './concept/listening-custom-event/listening-custom-event.component';


export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
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
      },
      {
        path: 'directive',
        component: DirectiveComponent,
      },
      {
        path: 'pipe',
        component: PipexComponent,
      },
      {
        path: 'parent_to_child',
        component: ParentToChildComponent,
      },
      {
        path: 'listen_custom_event',
        component: ListeningCustomEventComponent,
      }
    ],
  },
];
