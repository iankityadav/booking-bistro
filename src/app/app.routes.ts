import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((c) => c.SignupComponent),
  },
  {
    path: 'book',
    loadComponent: () =>
      import('./book-table/book-table.component').then(
        (c) => c.BookTableComponent
      ),
  },
  {
    path: 'booking',
    loadComponent: () =>
      import('./booking/booking.component').then((c) => c.BookingComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
