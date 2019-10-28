import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PostsSearchComponent } from './posts/posts-search.component';
import { SettingsComponent } from './settings/settings.component';
//import { SinglePostComponent } from './posts/single-post.component';


const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'home/:id', component:HomeComponent},
    {path:'search/:query', component:PostsSearchComponent},
    {path:'news/:option/:slug', component:NewsComponent},
    {path:'news/:slug', component:NewsComponent},
    {path:'news', component:NewsComponent},
    {path:'settings', component:SettingsComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
]

export default routes;