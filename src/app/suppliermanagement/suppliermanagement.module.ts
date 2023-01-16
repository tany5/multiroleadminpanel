import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliermanagementRoutingModule } from './suppliermanagement-routing.module';
import { SuppliermanagementComponent } from './suppliermanagement.component';


@NgModule({
  declarations: [
    SuppliermanagementComponent
  ],
  imports: [
    CommonModule,
    SuppliermanagementRoutingModule
  ]
})
export class SuppliermanagementModule { }
