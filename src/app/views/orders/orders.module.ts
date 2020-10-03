import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {OrderReducer} from '../../store/orders/orders.reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('order', OrderReducer)
  ]
})
export class OrdersModule { }
