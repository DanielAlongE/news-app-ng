import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-posts-search',
  templateUrl: './posts-search.component.html'
})
export class PostsSearchComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  query: string = '';

  ngOnInit() {
    this.route.params.forEach((params: Params) => {

      console.log("search ", params);

      if(params['query']){
        this.query = params['query'];
      }

    });
  }

}
