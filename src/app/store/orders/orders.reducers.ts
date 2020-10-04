import { OrderModel } from 'src/app/model/order.model';
import { OrderActions, OrderActionTypes } from './orders.actions';

export interface OrderState {
  data: OrderModel[];
  done: boolean;
  error: string;
}

export const initialState: OrderState = {
  data: [],
  done: false,
  error: ''
};

export function OrderReducer(state = initialState, action: OrderActions): OrderState {
  switch (action.type) {
    case OrderActionTypes.OrderLoad:
      return { ...state };

    case OrderActionTypes.OrderCreated:
      return { ...state, done: true };

    case OrderActionTypes.OrderUpdated:
      return { ...state, done: true };

    case OrderActionTypes.OrderDeleted:
      return { ...state, done: true };

    case OrderActionTypes.OrderLoadFail:
      return { ...state, error: action.payload.error };

    case OrderActionTypes.OrderLoadSuccess:
      return { ...state, data: action.payload.orders, done: true };

    default:
      return state;
  }
}
