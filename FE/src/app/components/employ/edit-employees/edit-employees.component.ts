import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employ } from 'src/app/models/employ.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.scss']
})
export class EditEmployeesComponent implements OnInit {

  employeeDetails: Employ = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(private route: ActivatedRoute, private employeesServices: EmployeesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeesServices.getEmployee(Number(id))
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          });
        }

      }
    })
  }

  updateEmployee(){
    this.employeesServices.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next: (reponse) => {
        console.log(reponse);
      }
    })
  }
}
