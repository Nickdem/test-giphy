import { iState, Item } from "../interfaces";

type Actions =
  | { type: 'GET_BY_TAG', payload: Item }
  | { type: 'LOAD', payload: boolean }
  | { type: 'SET_VALUE', payload: string }
  | { type: 'DELETE' }
  | { type: 'GROUP', payload: boolean }

const handlers: any = {
  'GET_BY_TAG': (state: iState, { payload }: any) => ({ ...state, arr: [...state.arr, payload], loading: false }),
  'LOAD': (state: iState, { payload }: any) => ({ ...state, loading: payload }),
  'SET_VALUE': (state: iState, { payload }: any) => ({ ...state, value: payload }),
  'DELETE': (state: iState) => ({ ...state, arr: [] }),
  'GROUP': (state: iState, { payload }: any) => ({ ...state, group: payload }),
  DEFAULT: (state: iState) => state
};

export const reducer = (state: iState, action: Actions) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
};