import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';
import { Store, select } from '@ngrx/store';
import { getSettings } from '../settings/state/settings.reducer';

@Component({
  selector: 'app-categories',
  template: `<ng-content></ng-content>`,
})
export class CategoriesComponent implements OnInit {
  url: string = "https://www.premiumtimesng.com"
  isFetching: boolean = true;
  @Input() args: object = {}
  categories: any[] = [];

  constructor(private wp: WordpressService, private store: Store<any>) { }

  ngOnInit() {
    console.log("args", this.args)
    this.morePosts(this.args);
  }

  ngOnChanges(): void {
    this.store.pipe(select(getSettings)).subscribe( settings => {
      this.url = settings.url;
    });    
    
  }

  morePosts(obj: object = {}){
    let offset = this.categories.length || 0;
    this.isFetching = true;


    this.wp.fetchCategories(this.url, { offset, ...obj }).subscribe( data => {
  
        this.categories.push(...data);
        this.isFetching = false;
        console.log({data})
      })
  }

}
