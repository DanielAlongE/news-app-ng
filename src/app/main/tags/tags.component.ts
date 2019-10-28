import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';

@Component({
  selector: 'app-tags',
  template: `<ng-content></ng-content>`,
})
export class TagsComponent implements OnInit {

  @Input() args = {}
  isFetching = true;
  tags: any[] = []
  url: string = "https://www.premiumtimesng.com";
  constructor(private wp: WordpressService) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    
    this.fetchTags(this.args);
    
  }

  fetchTags(obj: object = {}){
    this.isFetching = true;
    this.wp.fetchTags(this.url,{...obj}).subscribe(
      tags => {
        this.tags.push(...tags);
        this.isFetching = false;
      }
    )
  }

}
