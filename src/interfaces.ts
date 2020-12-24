export interface iState {
  value: string;
  arr: Item[] | [];
  loading: boolean;
  group: boolean;
};

export interface Item {
  name: string;
  url: string[]
};