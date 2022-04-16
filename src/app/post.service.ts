import { Injectable } from '@angular/core';
import {Post} from "./post";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //postlist:Array<Post>=[]
  constructor(public httpclient:HttpClient) { }

  getpostapidata():Observable<Array<Post>>{

    return this.httpclient.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts")

  }

}
