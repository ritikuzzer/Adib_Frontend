import { Employee } from './../models/Employee';
import { Injectable } from '@angular/core';
import * as data from './employees.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployee(){
    return data;
  }  
}
