import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {


  msg:string="";
  entryformRef=new FormGroup({
    name:new FormControl(),
    maths:new FormControl(),
    science:new FormControl(),
    english:new FormControl()
  })
  constructor(public emps:EmployeeService) { }  // di  for employee Serivce

  ngOnInit(): void {
  }

   addbtnclicked(){
     let entryform=this.entryformRef.value
     let newemployee=new Employee(entryform.name,eval(entryform.maths),eval(entryform.science),eval(entryform.english))
     this.emps.recordlist.push(newemployee)
    // this.emps.recordlist.push(new Employee(name:entryform.name,maths:parseInt(entryform.maths),science:parseInt(entryform.science),english:eval(entryform.english)))

     //new Employee()
     this.msg="record successfully added.";

   }
}
