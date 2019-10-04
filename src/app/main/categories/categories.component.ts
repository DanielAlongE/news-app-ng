import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  url: string = "https://www.premiumtimesng.com"
  isFetching: boolean = true;
  @Input() args: object = {}
  categories: any[] = [];

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    console.log("args", this.args)
    this.morePosts(this.args);
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
