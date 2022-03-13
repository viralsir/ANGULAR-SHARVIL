import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR-SHARVIL';
  age:number =23;
  eventbindingshow:boolean=false;
  twobindingshow:boolean=false;

  display(){
    return "hello from display function";
  }
  Voting(){
     if(this.age<18)
       return "you are not eligable to vote";
     else
     {
       return "you are eligable to vote";
     }
  }
   showeventbindingbtnclicked()
   {
     this.eventbindingshow=true;
     this.twobindingshow=false;
   }
   showtwobindingclicked()
   {
     this.twobindingshow=true;
     this.eventbindingshow=false;
   }
}
