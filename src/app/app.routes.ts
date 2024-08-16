import { Routes } from '@angular/router';
import { UsersComponent } from './components/pages/users/users.component';
import { UserDetailsComponent } from './components/pages/user-details/user-details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {
    path: 'user-details/:email',
    component: UserDetailsComponent,
  },
];
