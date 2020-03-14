import { HistoryInterface, HistoryElement } from './../state/history.state';
import { Action } from '@ngrx/store';

export enum HistoryActionsEnum {
  PushHistoryItem = '[History] Push Item',
  PushHistoryItemSuccess = '[History] Push Item Success',
  GetLastItem = '[History] Get Last Item',
  GetLastItemSuccess = '[History] Get Last Item Success',
  GetAllItems = '[History] Get All Items',
  GetAllItemsSuccess = '[History] Get All Items Success',
}

export class PushHistoryItem implements Action {
  public readonly type = HistoryActionsEnum.PushHistoryItem;
  constructor(public payload: HistoryElement) {}
}

export class PushHistoryItemSuccess implements Action {
  public readonly type = HistoryActionsEnum.PushHistoryItemSuccess;
  constructor(payload: HistoryElement) {}
}

export class GetLastItem implements Action {
  public readonly type = HistoryActionsEnum.GetLastItem;
  constructor(payload: HistoryElement) {}
}

export class GetLastItemSuccess implements Action {
  public readonly type = HistoryActionsEnum.GetLastItemSuccess;
  constructor(payload: HistoryElement) {}
}

export class GetAllItems implements Action {
  public readonly type = HistoryActionsEnum.GetAllItems;
  constructor(payload: HistoryElement) {}
}

export class GetAllItemsSuccess implements Action {
  public readonly type = HistoryActionsEnum.GetAllItemsSuccess;
  constructor(payload: HistoryElement) {}
}

export type HistoryActions = GetAllItems
  | GetAllItemsSuccess
  | PushHistoryItem
  | PushHistoryItemSuccess
  | GetLastItem
  | GetLastItemSuccess;
