import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliermanagementComponent } from './suppliermanagement.component';

const routes: Routes = [{ path: '', component: SuppliermanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliermanagementRoutingModule { }
