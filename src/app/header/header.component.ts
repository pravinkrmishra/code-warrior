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
  count:number;
  constructor(private service: EmployeesDataService) { }

  ngOnInit(): void {
    // this.employeeData = this.service.getAllemployees();

    this.service.employeeCount.subscribe(risponse =>{
      this.count = risponse;
    })

  }

}
