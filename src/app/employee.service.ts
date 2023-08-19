import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable, retry, tap} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees"

  constructor(private httpClient: HttpClient) {
  }

  employees: Employee[] = []

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL).pipe(
      delay(200),
      retry(2),
      tap(employee => this.employees = employee as Employee[])
    );
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(this.baseURL, employee)
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseURL + '/' + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(this.baseURL + '/' + id, employee)
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + '/' + id)
  }
}
