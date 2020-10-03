import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from '../../store/counter/counter.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('count', counterReducer)
  ]
})
export class CounterModule {
}
