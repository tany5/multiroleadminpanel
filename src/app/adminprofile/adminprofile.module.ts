import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminprofileRoutingModule } from './adminprofile-routing.module';
import { AdminprofileComponent } from './adminprofile.component';
import { CompanydetailsComponent } from './pages/companydetails/companydetails.component';
import { SecurityComponent } from './pages/security/security.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { DocumentmanagementComponent } from './pages/documentmanagement/documentmanagement.component';
import { ContactinformationComponent } from './pages/contactinformation/contactinformation.component';


@NgModule({
  declarations: [
    AdminprofileComponent,
    CompanydetailsComponent,
    SecurityComponent,
    UsermanagementComponent,
    DocumentmanagementComponent,
    ContactinformationComponent
  ],
  imports: [
    CommonModule,
    AdminprofileRoutingModule
  ]
})
export class AdminprofileModule { }
