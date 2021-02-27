import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  constructor(private  http: HttpClient) { }

  baseUrl= 'http://localhost:3000/employees' ;

   employeeCount = new BehaviorSubject(null);
  

  getAllemployees(){
    return this.http.get(this.baseUrl)
  }

  getEmployeeDetailById(id: string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`) 
  }
  
  updateEmployeeDetails(data: any) {
    return this.http.put(`${this.baseUrl}/${data.id}`, data);
  }


}
