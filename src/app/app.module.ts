import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {CounterComponent} from './views/counter/counter.component';
import {OrdersComponent} from './views/orders/orders.component';
import {CounterModule} from './views/counter/counter.module';
import {Routes, RouterModule} from '@angular/router';
import {OrdersModule} from './views/orders/orders.module';
import {OrderReducer} from './store/orders/orders.reducers';

const routes: Routes = [
  {path: '', redirectTo: '/order', pathMatch: 'full'},
  {path: 'counter', component: CounterComponent},
  {path: 'order', component: OrdersComponent},
];

export const reducers: ActionReducerMap<any> = {
  orders: OrderReducer
};

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    CounterModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
