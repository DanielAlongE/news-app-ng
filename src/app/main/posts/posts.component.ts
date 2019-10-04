import { Component, OnInit, Input, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //@ContentChild(TemplateRef, {static:false}) postsTemplate;
  
  constructor(private wp: WordpressService) { }
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

  


  ngOnInit() {
    
    //this.morePosts();
  }

  ngOnChanges(): void {
    this.posts = []
    this.morePosts();
    console.log("OnChanges clear and fetchPost");
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.

    //postsTemplate
    //console.log("ngAfterContentChecked", this.postsTemplate);
  }

  handlecategories(){
    if(this.categories){
      this.args['categories '] = this.categories;
      console.log("handled categories")
    }
  }

  morePosts(obj: object = {}){
    let offset = this.posts.length || 0;
    this.isFetching = true;

    if(this.categories){
      obj["categories"] = this.categories;
    }

    this.wp.fetchPosts(this.url, {...this.defaultArgs, offset, ...obj, _embed:''}).subscribe( data => {
  
        this.posts.push(...data);
        this.isFetching = false;
        console.log({data})
      })
  }
  

}
