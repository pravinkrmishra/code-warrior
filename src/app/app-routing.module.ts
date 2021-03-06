import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'emp-list',
    component: EmployeesListComponent,
},
{
  path: 'edit/:id',
  component: EditEmployeesComponent,
},
{
  path: 'create',
  component:CreateEmployeesComponent,
},
{
  path: '', component: EmployeesListComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
