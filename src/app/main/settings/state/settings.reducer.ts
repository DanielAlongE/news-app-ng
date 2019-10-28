import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsActionTypes, SettingsActions } from './settings.action';


const initialState = {
    url: "https://www.thecable.ng",
    name: "The Cable"
    }

const getSettingsFeatureState = createFeatureSelector<any>('settings');

export const getSettings = createSelector(
    getSettingsFeatureState,
    state => state
)

export function reducer (state = {...initialState} , action: SettingsActions) {

    switch (action.type) {
        
        case SettingsActionTypes.UpdateSettings:
        
            return { ...state, ...action.payload }

        case SettingsActionTypes.ResetSettings:

            return { ...state, }

        default:
            return state;

    }
}