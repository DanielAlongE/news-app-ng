import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WordpressService } from '../../core/wordpress/wordpress.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private wp: WordpressService) { }

  url: string = "https://www.premiumtimesng.com";
  args: any = {};
  posts: any[] = [];
  isFetching: boolean = false;
  slug: string;
  category: string;
  isSingle: boolean = false;

 
  ngOnInit() {

    //const {category, slug} = this.route.snapshot.params;

    this.route.params.forEach((params: Params) => {
      console.log("params -> ", params['slug'], params['category'])
      this.slug = params['slug'];
      this.category = params['category'];

      if(this.category && this.slug){
        this.category = this.slug;
        this.isSingle = false;
      }
      else if(this.slug){
        this.isSingle = true;
      }
      else{
        this.isSingle = false;
      }

    });

    

    //console.log({category, slug});
  }


  goHome(){
    this.router.navigate(["/"])
  }

  fetchPosts(args: object = {}){

    this.isFetching = true;

    this.wp.fetchPosts(this.url, args).subscribe(data => {
      let prepared = this.wp.preparePosts(data);
      this.posts.push(...prepared);
      this.isFetching = false;
      //console.log({data})
    } )

  }

}
