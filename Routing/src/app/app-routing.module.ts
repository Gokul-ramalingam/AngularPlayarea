import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router'
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes : Routes = [
  {path : '',redirectTo :'/departments' , pathMatch : 'full'},
  {path : 'departments' ,component : DepartmentListComponent},
  {
    path : 'departments/:id',
    component :DepartmentdetailComponent,
    children :[
      {path : 'overview', component :DepartmentOverviewComponent},
      {path : 'contact', component :DepartmentContactComponent}
    ]
  },
  {path : 'employees'  ,component : EmployeeListComponent},
  {path : '**' ,component : PageNotFoundComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentdetailComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent]