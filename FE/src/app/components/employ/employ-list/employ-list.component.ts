import { Component, OnInit } from '@angular/core';
import { Employ } from 'src/app/models/employ.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.scss']
})
export class EmployListComponent implements OnInit {

  employ: Employ[] = [];
  constructor(private employeesServices: EmployeesService, private router: Router) { }
  x = 0;
  ngOnInit(): void {
    this.employeesServices.getAllEmployee()
    .subscribe({
      next: (em) => {
        this.employ = em;
      },
      error: (reponse) => {
        console.log(reponse);
      }
    })
  }

  deleteEmployee(id:number){
    this.employeesServices.deleteEmployee(id)
    .subscribe({
      next: (reponse) => {
        ////
      }
    })
  }

  addIdEmployee(id:number){
    this.x = id;
    
  }

}
