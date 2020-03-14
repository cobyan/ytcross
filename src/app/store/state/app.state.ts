import { RouterReducerState } from '@ngrx/router-store';

import { HistoryInterface, initialHistoryState } from './history.state';

export interface AppStateInterface {
  router?: RouterReducerState;
  history: HistoryInterface;
}

export const initialAppState: AppStateInterface = {
   history: initialHistoryState,
};

export function getInitialState(): AppStateInterface {

  return initialAppState;
}
