import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrderState } from '../../store/orders/orders.reducers';
import { OrderAdd, OrderDelete, OrderLoad, OrderUpdate } from '../../store/orders/orders.actions';
import { Observable } from 'rxjs';
import { OrderModel } from '../../model/order.model';
import { selectAllOrders } from '../../store/orders/orders.selector';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Observable<OrderModel[]>;
  orderModel: OrderModel;

  constructor(private store: Store<{ orders: OrderState }>) {
    this.orders = store.select(selectAllOrders);
    this.store.dispatch(new OrderLoad());
  }

  ngOnInit(): void {
  }

  onSubmit(id: string) {
    if (id) {
      this.store.dispatch(new OrderUpdate({ orderModel: this.orderModel }));

      return;
    }

    this.store.dispatch(new OrderAdd({ orderModel: this.orderModel }));
  }

  onDelete(id: string) {
    this.store.dispatch(new OrderDelete({ id }));
  }
}
