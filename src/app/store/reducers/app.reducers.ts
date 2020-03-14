import { historyReducers } from './history.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { AppStateInterface } from '../state/app.state';

export const appReducers: ActionReducerMap<AppStateInterface, any> = {
  history: historyReducers
};
