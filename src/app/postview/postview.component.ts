import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  postlist:Array<Post>=[]
  constructor(public postservice:PostService) { }

  ngOnInit(): void {
  }

  viewpostdata(){
    this.postservice.getpostapidata().subscribe(list=>this.postlist=list,error => {
      console.log(error);
    })
  }


}
