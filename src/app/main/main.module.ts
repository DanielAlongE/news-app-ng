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


import { StoreModule } from '@ngrx/store';
import { reducer } from './posts/state/posts.reducer';
import { reducer as SettingsReducer } from './settings/state/settings.reducer';
import { HeaderComponent } from './header/header.component';
import { PostsSearchComponent } from './posts/posts-search.component';
import { TagsComponent } from './tags/tags.component';
import { SettingsComponent } from './settings/settings.component';

import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './posts/state/posts.effects';



@NgModule({
  declarations: [
    MainComponent, HeaderComponent,
    HomeComponent, NewsComponent, PostsComponent, SinglePostComponent, 
    CategoriesComponent, PostsSearchComponent, TagsComponent, SettingsComponent
  ],
  imports: [
    SharedModule, 
    CoreModule, 
    RouterModule.forChild(routes), 
    StoreModule.forFeature("posts", reducer),
    StoreModule.forFeature("settings", SettingsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  exports:[MainComponent]
})
export class MainModule { }
