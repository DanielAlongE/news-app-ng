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


  args: any = {};
  slug: string;
  category: string = "";
  tag: string = "";
  isSingle: boolean = false;

 
  ngOnInit() {

    //const {category, slug} = this.route.snapshot.params;

    this.route.params.forEach((params: Params) => {
      console.log("params -> ", params )
      this.slug = params['slug'];
      let option = params['option'];

      this.isSingle = false;
        
      if(option === 'category' && this.slug){
        this.category = this.slug;
      }
      else if(option === 'tag' && this.slug){
        this.tag = this.slug;
      }
      else if(this.slug){
        this.isSingle = true;
      }


    });

  }


  goHome(){
    this.router.navigate(["/"])
  }


}
