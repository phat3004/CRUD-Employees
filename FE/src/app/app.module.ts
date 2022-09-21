import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployListComponent } from './components/employ/employ-list/employ-list.component';
import { AddEmployeesComponent } from './components/employ/add-employees/add-employees.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeesComponent } from './components/employ/edit-employees/edit-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployListComponent,
    AddEmployeesComponent,
    EditEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
