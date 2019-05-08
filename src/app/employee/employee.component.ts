import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';

declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
	  this.resetForm();
	  this.refreshEmployeeList();
  }

  resetForm(form?: NgForm){
	if (form) {
		form.reset();
		this.employeeService.selectedEmployee = {
			_id: "",
			name: "",
			position: "",
			office: "",
			salary: null
		}
	}
  }

  onSubmit(form : NgForm){
	  if (form.value._id == "") {
		this.employeeService.postEmployee(form.value).subscribe((res) => {
			this.resetForm(form);
			M.toast({html: 'Saved Succesfully', classes:'rounded'})
		})
	  } else {
		 this.employeeService.updateEmployee(form.value).subscribe((res) => {
			 this.resetForm();
			 M.toast({html: 'Updated Succesfully', classes:'rounded'})
		 }) 
	  }
  }

  refreshEmployeeList(){
	  this.employeeService.getEmployees().subscribe((res) => {
		  this.employeeService.employees = res as Employee[];
	  })
  }

  onEdit(emp: Employee){
	  this.employeeService.selectedEmployee = emp;
  }

}
