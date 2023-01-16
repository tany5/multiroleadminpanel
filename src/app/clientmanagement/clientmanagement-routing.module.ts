import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientmanagementComponent } from './clientmanagement.component';

const routes: Routes = [{ path: '', component: ClientmanagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientmanagementRoutingModule { }
