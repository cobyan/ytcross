export interface HistoryInterface {
  items: HistoryElement[];
}
export interface HistoryElement {
  time: Date;
  video: any;
}

export const initialHistoryState: HistoryInterface = {
  items: [],
};
