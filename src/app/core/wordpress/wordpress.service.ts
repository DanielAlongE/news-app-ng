import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DotpropService } from '../dotprop/dotprop.service';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient, private dotProp: DotpropService) { }

  argsSerialize(args: object, start = "?"): string {
    var params: string = "";
    var i = 0;
    var end = "";
    
    for(let key in args) {
    
    //add & to the string
    if(i>0 && args[key]!==""){
      params += '&';
    }
    
    //check if key has a value
    if(args[key]===""){
      end += "&" + key;
    }else{
      params += key + '=';
      params += Array.isArray(args[key]) ? args[key].join(',') : args[key];
    }
    
      i++;
    }

    if(params){
      params = start + params + end;
    }
  
    return params;
    
  }

  preparePost(post={},key=0){
    const id = this.dotProp.get(post, "id", 0);
    const slug = this.dotProp.get(post, "slug");
    const title = this.dotProp.get(post, "title.rendered", "");
    const content = this.dotProp.get(post, "content.rendered", "");
    const excerpt = this.dotProp.get(post, "excerpt.rendered", "");
    const date = this.dotProp.get(post, "date", new Date());
    const media = this.dotProp.get(post, "_embedded.wp:featuredmedia.0.media_details.sizes", {});
    const tags = this.dotProp.get(post, "tags", []);
    const categories = this.dotProp.get(post, "categories", []);

    const dateFromNow = moment(date, "YYYY-MM-DD HH:mm:ss").fromNow();

    //const media = _embedded && _embedded['wp:featuredmedia'] && _embedded['wp:featuredmedia'][0] && _embedded['wp:featuredmedia'][0]['media_details'] && _embedded['wp:featuredmedia'][0]['media_details']['sizes'] ?  _embedded['wp:featuredmedia'][0]['media_details']['sizes'] : {};
    const {thumbnail={source_url:'https://picsum.photos/200'}, medium={source_url:'https://picsum.photos/500'}, full={source_url:'https://picsum.photos/700'}} = media;

    const mediaObject = {thumbnail:thumbnail.source_url, medium:medium.source_url, full:full.source_url};

    return { key:`post-${key}-${id}`, id, slug, title, content, excerpt, 
              date:dateFromNow, media:{...mediaObject}, tags, categories };
  }

  preparePosts(posts: any): any[] {
    return posts.map((post, index) => {
      return this.preparePost(post, index);
    })
  }

  fetchPosts(url: string, args: object = {}): Observable<any[]> {
    let params = {per_page:10, orderby:'date', order:'desc', ...args};
    url = `${url}/wp-json/wp/v2/posts` + this.argsSerialize(params);

    console.log(`fetching posts from ${url}`);

    return this.http.get(url).pipe(map(posts => {
      //console.log("pipe", posts)
      return this.preparePosts(posts);
    }));
  }

  fetchSinglePost(url: string, args: object = {}, id?: number): Observable<any> {
    let params = { ...args };
    url = `${url}/wp-json/wp/v2/posts`;

    if(id){
      url += `/${id}`
    }
    
    url += this.argsSerialize(params);

    console.log(`fetching singlePost from ${url}`);

    return this.http.get(url).pipe(map(post => {
      if(Array.isArray(post)){
        return this.preparePost(post[0]);
      }else{
        return this.preparePost(post);
      }
    })
    );
  }

  fetchCategories(url: string, args: object = {}): Observable<any> {
    let params = {per_page:50, orderby:'count',  order:'desc',  hide_empty:true, ...args};
    url = `${url}/wp-json/wp/v2/categories` + this.argsSerialize(params);
    console.log(`fetching categories from ${url}`);
    return this.http.get(url);
  }

  fetchTags(url: string, args: object = {}): Observable<any> {
    let params = {per_page:50, orderby:'count',  order:'desc',  hide_empty:true, ...args};
    url = `${url}/wp-json/wp/v2/tags` + this.argsSerialize(params);
    console.log(`fetching tags from ${url}`);
    return this.http.get(url);
  }


}
