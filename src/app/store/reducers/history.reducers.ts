import { initialHistoryState, HistoryInterface } from './../state/history.state';
import { HistoryActions, HistoryActionsEnum } from '../actions/history.actions';

export const historyReducers = (
  state = initialHistoryState,
  action: HistoryActions
): HistoryInterface => {

  switch (action.type) {
    case HistoryActionsEnum.PushHistoryItem:
      console.log(state, {...state});

      return {
          ...state,
          items: [...state.items, action.payload]
      };

    default:
      return state;
  }
};
