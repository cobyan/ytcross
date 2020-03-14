import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../state/app.state';
import { HistoryInterface } from '../state/history.state';

const selectHistory = (state: AppStateInterface) => state.history;

export const selectHistoryItems
  = createSelector(selectHistory, (state: HistoryInterface) => state.items);
