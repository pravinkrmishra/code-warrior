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
}
