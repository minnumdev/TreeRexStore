import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './tree-rex-store/cart/cart.component';
import { TreeRexStoreComponent } from './tree-rex-store/tree-rex-store.component';

const routes: Routes = [{
  path : '',
  component : TreeRexStoreComponent
},
{
  path : 'tree-rex/cart',
  component : CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
