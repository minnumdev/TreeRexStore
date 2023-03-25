import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './tee-rex-store/cart/cart.component';
import { TeeRexStoreComponent } from './tee-rex-store/tee-rex-store.component';

const routes: Routes = [{
  path : '',
  component : TeeRexStoreComponent
},
{
  path : 'tee-rex/cart',
  component : CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
