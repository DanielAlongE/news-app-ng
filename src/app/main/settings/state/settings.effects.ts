import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap, catchError, tap } from 'rxjs/operators';
//import * as settingsAction  from './settings.action';
import { WordpressService } from 'src/app/core/wordpress/wordpress.service';


@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private wp: WordpressService) {}
/*
  loadPosts$ = createEffect(() => this.actions$.pipe(
      ofType(postsAction.PostsActionTypes.FetchPosts), 
      mergeMap(
          () => this.wp.fetchPosts("https://www.thecable.ng").pipe(
              tap(posts => this.wp.preparePost(posts)),
              map(posts => new postsAction.FetchPostsSuccess(posts))
          )
      )
    )
  );
*/

  //The project

}

