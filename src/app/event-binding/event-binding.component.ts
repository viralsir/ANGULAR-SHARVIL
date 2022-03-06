import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg:string="";
  mystyle:string="";
  constructor() { }

  ngOnInit(): void {
  }

  btnclicked(name:any){
    console.log("btn is clicked");
    console.log(name.value);
    name.style.backgroundColor='yellow';
    this.msg="hello "+ name.value;
  }

  totalbtnclicked(no1:any,no2:any){
    this.msg="Total :"+ (eval(no1.value)+eval(no2.value));
  }

  isvoting(ageTextbox:any){

    if(ageTextbox.value>=18)
    {
      this.msg="you are eligable for vote";
      this.mystyle="color:green";
    }
    else
    {
      this.msg="you are not eligable for vote";
      this.mystyle="color:red";
    }

  }

}
