import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'profile', canLoad:[AuthGuard], loadChildren: () => import('./adminprofile/adminprofile.module').then(m => m.AdminprofileModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'clients', loadChildren: () => import('./clientmanagement/clientmanagement.module').then(m => m.ClientmanagementModule) },
  { path: 'suppliers', loadChildren: () => import('./suppliermanagement/suppliermanagement.module').then(m => m.SuppliermanagementModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
