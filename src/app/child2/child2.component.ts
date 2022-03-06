import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mychild2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
   name:string="viren"
  constructor() { }

  ngOnInit(): void {
  }

}
