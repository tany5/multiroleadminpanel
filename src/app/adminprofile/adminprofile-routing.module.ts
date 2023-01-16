import { RoleGuard } from './../core/guards/role.guard';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { SecurityComponent } from './pages/security/security.component';
import { DocumentmanagementComponent } from './pages/documentmanagement/documentmanagement.component';
import { CompanydetailsComponent } from './pages/companydetails/companydetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminprofileComponent } from './adminprofile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminprofileComponent,
    canActivateChild: [RoleGuard],
    children: [
      {
        path: 'companydetails',
        component: CompanydetailsComponent,
        data: {
          role: 'companydetails'
        }
      },
      {
        path: 'contactinformation',
        component: CompanydetailsComponent,
        data: {
          role: 'contactinformation'
        }
      },
      {
        path: 'documentmanagement',
        component: DocumentmanagementComponent,

        data: {
          role: 'documentmanagement'
        }
      },
      {
        path: '',
        component: SecurityComponent,

        data: {
          role: 'security'
        }
      },
      {
        path: 'usermanagement',
        component: UsermanagementComponent,

        data: {
          role: 'usermanagement'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminprofileRoutingModule { }
