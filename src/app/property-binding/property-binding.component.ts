import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  msg:string="this is proerty binding value"

  f1:boolean=true;
  f2:boolean=true;
  mystyle:string="color:green";

  constructor() { }

  ngOnInit(): void {
  }

}
