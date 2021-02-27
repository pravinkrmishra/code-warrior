import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  constructor(private  http: HttpClient) { }

  baseUrl= 'http://localhost:3000/employees'
  

  getAllemployees(){
    return this.http.get(this.baseUrl)
  }

  getEmployeeDetailById(id: string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  deleteEmployee(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`) 
  }


}
