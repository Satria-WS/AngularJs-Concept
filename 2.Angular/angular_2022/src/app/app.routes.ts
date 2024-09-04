import { Routes } from '@angular/router';
import { ConceptComponent } from './concept/concept.component';
import { InterpolationComponent } from './concept/interpolation/interpolation.component';
import { TwoWayBindingComponent } from './concept/two-way-binding/two-way-binding.component';
import { DirectiveComponent } from './concept/directive/directive.component';
import { PipexComponent } from './concept/pipex/pipex.component';
import { ParentToChildComponent } from './concept/parent-to-child/parent-to-child.component';
import { BooksComponent } from './books/books.component';
import { ListeningCustomEventComponent } from './concept/listening-custom-event/listening-custom-event.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './auth/auth.guard';
// import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  { path: 'cart', component: CartComponent , canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
  // { path: '**', component: PageNotFoundComponent },
];
