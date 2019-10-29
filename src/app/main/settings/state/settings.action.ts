import { Action } from '@ngrx/store';


export enum SettingsActionTypes {
    UpdateSettings = '[Settings] Update Settings',
    ResetSettings = '[Settings] Reset Settings',
}


export class UpdateSettings implements Action {
    readonly type = SettingsActionTypes.UpdateSettings;

    constructor(public payload: any){}
}

export class ResetSettings implements Action {
    readonly type = SettingsActionTypes.ResetSettings;
}



export type SettingsActions = UpdateSettings
            | ResetSettings;

