import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  constructor(
    public employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe()
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id])
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data)
      this.getEmployees()
    });
  }

  detailsEmployee(id: number){
    this.router.navigate(['details-employee', id])
  }
}
