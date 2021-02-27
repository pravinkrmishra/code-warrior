import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { PopupComponent } from './shared/popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesListComponent,
    CreateEmployeesComponent,
    EditEmployeesComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
