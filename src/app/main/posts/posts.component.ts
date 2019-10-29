import { Component, OnInit, Input, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';
import { Store, select } from '@ngrx/store';
import { getPosts } from './state/posts.reducer';
import * as postsActions  from './state/posts.action';
import { getSettings } from '../settings/state/settings.reducer';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //@ContentChild(TemplateRef, {static:false}) postsTemplate;
  
  constructor( private wp: WordpressService, private store: Store<any> ) { }
  url: string = "https://www.premiumtimesng.com"//"https://babbangona.com"
  posts: any[] = []
  isFetching: boolean = false;
  defaultArgs: object = {per_page:10, orderby:'date', order:'desc'};
  _categories: string;

  @Input() args = {};
  @Input() 
  set categories(value: any){
    this._categories = Array.isArray(value) ? value.join(',') : value;
  }

  get categories() {
    return this._categories;
  }

  @Input() tags

  


  ngOnInit() {
    
    //this.morePosts();
    //select('posts')
    //this.store.pipe(select(getPosts)).subscribe(posts => {    console.log("posts from store", posts)    })
    //console.log("posts.comp ngOnInit")
    //this.store.dispatch(new postsActions.FetchPosts())
    console.log("ngOnInit posts")


    

  }

  ngOnChanges(): void {

    console.log("ngOnChanges posts");


    this.store.pipe(select(getSettings)).subscribe( settings => {
      this.url = settings.url;
      console.log("posts settings url", this.url)
    });
    
    this.posts = []
    this.morePosts(this.args);
    console.log("OnChanges clear and fetchPost, ", this.args );
  }

  addPosts(value: any[]): void {
    console.log("addPosts")
    /*
    {
      type: 'ADD_POSTS',
      payload: value
    }
    */
    
   
    this.store.dispatch(new postsActions.AddPosts(value))
  }




  morePosts(obj: object = {}){
    let offset = this.posts.length || 0;
    this.isFetching = true;

    if(this.categories){
      obj["categories"] = this.categories;
    }

    if(this.tags){
      obj["tags"] = this.tags;
    }

    this.wp.fetchPosts(this.url, {...this.defaultArgs, offset, ...obj, _embed:''}).subscribe( data => {
  
        this.posts.push(...data);
        this.addPosts(data);
        this.isFetching = false;
        console.log({data})
      })
  }
  

}
