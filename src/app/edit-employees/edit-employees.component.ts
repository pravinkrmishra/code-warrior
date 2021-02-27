import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesDataService } from '../employees-data.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.scss']
})
export class EditEmployeesComponent implements OnInit {

  model: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: EmployeesDataService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const userId = params["id"];
      this.service.getEmployeeDetailById(userId).subscribe(res => {
        this.model = res;
      });
    });
  }

  onSubmit() {
    this.service.updateEmployeeDetails(this.model).subscribe((res) => {
      alert('Record is updated sucessfully..');
      setTimeout(() => {
        this.router.navigate(['/emp-list']);
      }, 0);
    })
  }

}
