import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
//import { SinglePostComponent } from './posts/single-post.component';


const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'home/:id', component:HomeComponent},
    {path:'news/:category/:slug', component:NewsComponent},
    {path:'news/:slug', component:NewsComponent},
    {path:'news', component:NewsComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
]

export default routes;