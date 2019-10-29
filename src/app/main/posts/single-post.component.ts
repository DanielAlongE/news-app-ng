import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';
import { Store, select } from '@ngrx/store';
import { getSettings } from '../settings/state/settings.reducer';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
})
export class SinglePostComponent implements OnInit {

  constructor(private wp: WordpressService, private store: Store<any>) { }
  url: string = "https://www.premiumtimesng.com"
  post: any = {}
  isFetching: boolean = true;
  defaultArgs: object = {};

  @Input() args = {};

  @Input() slug;



  ngOnInit() {



  }

  ngOnChanges(): void {
    
    this.store.pipe(select(getSettings)).subscribe( settings => {
      this.url = settings.url;
    });    

    //console.log("slug", this.slug);
    this.fetchPost(this.args);    

  }

  fetchPost(obj: object = {}){
    //this.isFetching = true;

    if(this.slug){
      this.wp.fetchSinglePost(this.url, {...this.defaultArgs, slug:this.slug, ...obj, _embed:''}).subscribe( data => {
    
          this.post = data;
          this.isFetching = false;
          console.log({data})
      })      
    }

  }
  

}
