import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { of } from "rxjs";
import { Action } from 'rxjs/internal/scheduler/Action';
import { catchError, mergeMap, exhaustMap, map } from "rxjs/operators";
import { OrderActionTypes, OrderLoad, OrderLoadSuccess, OrderLoadFail } from "./orders.actions";
import { OrdersService } from './orders.service';

@Injectable()
export class OrderEffects {
    @Effect()
    loadOrders$ = this.action$
        .pipe(
            ofType<OrderLoad>(OrderActionTypes.OrderLoad),
            mergeMap(() => 
                this.orderService.getHeroes()
                    .pipe(
                        map(items => new OrderLoadSuccess({ orders: items })),
                        catchError(error => of(new OrderLoadFail(error)))
                    )
            )
        )

    constructor(private action$: Actions, private orderService: OrdersService) {

    }
}