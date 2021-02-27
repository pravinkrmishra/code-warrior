import { Router, RouterModule } from '@angular/router';
import { EmployeesDataService } from './../employees-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeesDataService: EmployeesDataService, private router: Router) { }
  employees:any = [];

  ngOnInit(): void {

    this.employeesDataService.getAllemployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    })

  }

  //Edit Employee
  editEmployee(employeeId:number){
    this.router.navigate(['/edit', employeeId]);
  }

  //Delete Employee
  deleteEmployee(employeeId:number){
    this.employeesDataService.deleteEmployee(employeeId).subscribe(data => {
      console.log("data",  data);
      let newEmployees = this.employees.filter(data => data.id !== employeeId);
      this.employees = newEmployees;
      console.log(this.employees);
    })
  }

}
