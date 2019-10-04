import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  url: string = "https://www.premiumtimesng.com"
  

  do(): Subject<any[]> {

    let subject: Subject<any[]> = new Subject();

    setTimeout(()=>{
    subject.next([1,2,3,4]);
    },2000)

    setTimeout(()=>{
      subject.next([5,6,7,8,9,0]);
      },6000)

    //subject.complete();

    return subject;
  }

  argsSerialize(args: object): string {
    var params: string = "";
    var i = 0;
    
    for(let key in args) {
    
    //add & to the string
    if(i>0){
      params+='&';
    }
    
    //check if key has a value
    if(args[key]===""){
      params+=key;
    }else{
    params+=key+'='+args[key];
    }
    
    i++;
    }

    if(params){
      params = "?"+params;
    }
  
    return params;
    
  }


  fetch(args: object = {}): Observable<any> {
    let url = `${this.url}/wp-json/wp/v2/categories` + this.argsSerialize(args);
    console.log(`fetching from ${url}`)
    return this.http.get(url);
  }

  fetchPosts(args: object = {}): Observable<any> {
    let url = `${this.url}/wp-json/wp/v2/posts` + this.argsSerialize(args);
    console.log(`fetching from ${url}`)
    return this.http.get(url);
  }
}
