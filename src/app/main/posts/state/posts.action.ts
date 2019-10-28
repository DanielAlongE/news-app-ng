import { Action } from '@ngrx/store';


export enum PostsActionTypes {
    AddPosts = '[Posts] Add Posts',
    ClearPosts = '[Posts] Clear Posts',
    FetchPosts = '[Posts] Fetch Posts',
    FetchPostsSuccess = '[Posts] Fetch Posts Success',
    FetchPostsFail = '[Posts] Fetch Posts Fail'
}


export class AddPosts implements Action {
    readonly type = PostsActionTypes.AddPosts;

    constructor(public payload: any[]){}
}

export class FetchPosts implements Action {
    readonly type = PostsActionTypes.FetchPosts;
}

export class FetchPostsSuccess implements Action {
    readonly type = PostsActionTypes.FetchPostsSuccess;
    constructor(public payload: any[]){}
}

export class FetchPostsFail implements Action {
    readonly type = PostsActionTypes.FetchPostsFail;
    constructor(public payload: string){}
}

export type PostsActions = AddPosts
    | FetchPosts
    | FetchPostsSuccess
    | FetchPostsFail;
