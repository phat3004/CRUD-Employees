import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employ } from 'src/app/models/employ.model';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {

  addEmployeeRequest: Employ = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(private employeesServices: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeesServices.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (em) => {
        console.log(em);
        //this.router.navigate(['employs']);/// change router
      }
    })
  }

}
