import { EmployeesDataService } from './../employees-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeesDataService: EmployeesDataService) { }
  employees:any = [];

  ngOnInit(): void {

    this.employeesDataService.getAllemployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    })

  }

}
