import { Injectable } from '@angular/core';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  recordlist:Array<Employee>=[]
  constructor() { }


}
