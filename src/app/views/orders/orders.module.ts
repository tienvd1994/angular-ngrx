import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import {OrderReducer} from '../../store/orders/orders.reducers';
import { OrderEffects } from '../../store/orders/orders.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('order', OrderReducer),
    EffectsModule.forFeature([OrderEffects])
  ]
})
export class OrdersModule { }
