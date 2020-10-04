import {Action} from '@ngrx/store';
import {OrderModel} from '../../model/order.model';

export enum OrderActionTypes {
  OrderCreated = '[Order Component] Add',
  OrderUpdated = '[Order Component] Update',
  OrderDeleted = '[Order Component] Deleted',
  OrderLoad = '[Order Component] Load',
  OrderLoadSuccess = '[Order Component] Load Success',
  OrderLoadFail = '[Order Component] Load Fail',
}

export class OrderAdd implements Action {
  readonly type = OrderActionTypes.OrderCreated;

  constructor(public payload: { orderModel: OrderModel }) {
  }
}

export class OrderUpdate implements Action {
  readonly type = OrderActionTypes.OrderUpdated;

  constructor(public payload: { orderModel: OrderModel }) {
  }
}

export class OrderDelete implements Action {
  readonly type = OrderActionTypes.OrderDeleted;

  constructor(public payload: { id: string }) {
  }
}

export class OrderLoad implements Action {
  readonly type = OrderActionTypes.OrderLoad;

  // constructor(public payload: { orders: OrderModel[] }) {
  // }
}

export class OrderLoadSuccess implements Action {
  readonly type = OrderActionTypes.OrderLoadSuccess;

  constructor(public payload: { orders: OrderModel[] }) {
  }
}

export class OrderLoadFail implements Action {
  readonly type = OrderActionTypes.OrderLoadFail;

  constructor(public payload: { error: any }) {
  }
}


export type OrderActions = OrderAdd
  | OrderUpdate
  | OrderDelete
  | OrderLoad
  | OrderLoadSuccess
  | OrderLoadFail;
