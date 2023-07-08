import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './tee-rex-store/cart/cart.component';
import { TeeRexStoreComponent } from './tee-rex-store/tee-rex-store.component';
import { FilterComponent } from './tee-rex-store/filter/filter.component';

const routes: Routes = [{
  path : '',
  component : TeeRexStoreComponent
},
{
  path : 'tee-rex/cart',
  component : CartComponent
},
{
  path : 'tee-rex/filter',
  component : FilterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
