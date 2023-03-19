import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeRexStoreComponent } from './tree-rex-store/tree-rex-store.component';

const routes: Routes = [{
  path : '',
  component : TreeRexStoreComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
