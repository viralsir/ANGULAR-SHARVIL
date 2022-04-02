import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginformRef:NgForm)
  {
    let loginform=loginformRef.value;
     console.log(loginform.username);
     if(loginform.username=="admin" && loginform.password=="123")
     {
       this.msg="login is successfull"
     }
     else
     {
       this.msg="invalid username or password";
     }
  }

}
