import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  msg:string=""
  loginformRef=new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",[Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  checkUser()
  {
    let loginform=this.loginformRef.value;

    if(loginform.user=="admin" && loginform.password=="123")
    {
      this.msg="login successfull"
    }
    else{
      this.msg="invalid username or password";
    }
    this.loginformRef.reset()
  }

}
