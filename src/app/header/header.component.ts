import { Component, OnInit } from '@angular/core';
import { EmployeesDataService } from '../employees-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  employeeData: Observable<any>;
  constructor(private service: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeeData = this.service.getAllemployees();
  }

}
