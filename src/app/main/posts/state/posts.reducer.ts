import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsActionTypes, PostsActions } from './posts.action';


const initial = {
    data: []    
    }

const getPostsFeatureState = createFeatureSelector<any>('posts');

export const getPosts = createSelector(
    getPostsFeatureState,
    state => state.posts
)

export function reducer (state = {...initial} , action: PostsActions) {

    switch (action.type) {
        
        case PostsActionTypes.AddPosts:
        
            return { ...state, data: [ ...state.data, ...action.payload ] }

        default:
            return state;

    }
}