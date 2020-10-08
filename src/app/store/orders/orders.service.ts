import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { OrderModel } from 'src/app/model/order.model';
import { ORDERS } from '../../model/mock-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getHeroes(): Observable<OrderModel[]> {
    return of(ORDERS);
  }
}
