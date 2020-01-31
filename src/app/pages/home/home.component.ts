import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private employees: EmployeeService) { }

  ngOnInit() {
    this.getAll();
  }

  employeesData = [];

  getAll(){
    this.employeesData = this.employees.getAllEmployee();
    console.log(this.employeesData.default);
  }
}
