import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployListComponent } from '../app/components/employ/employ-list/employ-list.component';
import { AddEmployeesComponent } from '../app/components/employ/add-employees/add-employees.component';
import { EditEmployeesComponent } from '../app/components/employ/edit-employees/edit-employees.component';
import { AppComponent } from '../app/app.component';
const routes: Routes = [
  {
    path: 'employs',
    component: EmployListComponent
  },
  {
    path: 'employs-add',
    component: AddEmployeesComponent
  },
  {
    // path: 'employs/edit/:id',
    path: 'employs-edit/:id',
    component: EditEmployeesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
