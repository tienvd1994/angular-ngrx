import {OrderActions, OrderActionTypes} from './orders.actions';

export interface OrderState {
  data: number[];
  done: boolean;
  error: string;
}

export const initialState: OrderState = {
  data: [] = [1, 2, 3],
  done: false,
  error: ''
};

export function OrderReducer(state = initialState, action: OrderActions): OrderState {
  switch (action.type) {
    case OrderActionTypes.OrderLoad:
      return {...state, done: true};

    case OrderActionTypes.OrderCreated:
      return {...state, done: true};

    case OrderActionTypes.OrderUpdated:
      return {...state, done: true};

    case OrderActionTypes.OrderDeleted:
      return {...state, done: true};

    default:
      return state;
  }
}
