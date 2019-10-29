import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsActionTypes, SettingsActions } from './settings.action';
import { Settings } from './settings';


const initialState: Settings = {
    url: "https://www.thecable.ng",
    name: "The Cable"
    }

const getSettingsFeatureState = createFeatureSelector<any>('settings');

export const getSettings = createSelector(
    getSettingsFeatureState,
    state => state
)

export function reducer (state: Settings = {...initialState} , action: SettingsActions): Settings {

    switch (action.type) {
        
        case SettingsActionTypes.UpdateSettings:
        
            return { ...state, ...action.payload }

        case SettingsActionTypes.ResetSettings:

            return { ...state, }

        default:
            return state;

    }
}