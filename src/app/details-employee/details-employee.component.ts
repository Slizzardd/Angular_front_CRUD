import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit{

  id: number = 0
  employee: Employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService

  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data
    })
  }


}
