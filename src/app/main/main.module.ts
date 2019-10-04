import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { RouterModule } from '@angular/router';
import routes from './main.routes';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './posts/single-post.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    MainComponent, 
    HomeComponent, NewsComponent, PostsComponent, SinglePostComponent, CategoriesComponent
  ],
  imports: [
    SharedModule, CoreModule, RouterModule.forChild(routes)
  ],
  exports:[MainComponent]
})
export class MainModule { }
