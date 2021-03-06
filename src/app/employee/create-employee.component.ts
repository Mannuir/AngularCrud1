import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto: false;

  employee: Employee = {
    id: 9,
    fullname: '',
    gender: '',
    email: '',
    phoneNumber: 0,
    contactPreference: '',
    dateOfBirth: new Date(),
    department: '',
    isActive: false,
    photoPath: '',

  };
  departments: Department[] =[
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},

  ];
  email: string;
  fullName: string;
  gender = 'male';
  phoneNumber: string;
  contactPreference: boolean;
  isActive: boolean;
  department : number;
  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm)
  }
  
}