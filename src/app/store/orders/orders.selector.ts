import {createSelector, createFeatureSelector} from '@ngrx/store';
import {OrderState} from './orders.reducers';

export const selectOrderState = createFeatureSelector<OrderState>('order');

export const selectAllOrders = createSelector(selectOrderState, orderState => {
  return orderState.data;
});
