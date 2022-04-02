import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  //show:boolean=false;
  //maths:number=12;
  constructor() { }
  marks:Array<number>=[23,33,44,55,66]
  students:Array<any>=[]
  passing_marks:number=35;

  ngOnInit(): void {
  }

  addbtnclicked(name:any,maths:any,sci:any,english:any){
     let new_student:any={}
    new_student["name"]=name.value;
    new_student["maths"]=eval(maths.value);
    new_student["sci"]=eval(sci.value);
    new_student["english"]=eval(english.value);
    if(new_student.maths>this.passing_marks && new_student.sci>this.passing_marks && new_student.english>this.passing_marks)
    {
      new_student["pass_fail"]="Pass"
    }
    else
    {
      new_student["pass_fail"]="Fail"
    }

    this.students.push(new_student)

  }

}
