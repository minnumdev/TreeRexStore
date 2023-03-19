import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRexStoreRoutingModule } from './tree-rex-store-routing.module';
import { TreeRexStoreComponent } from './tree-rex-store.component';


@NgModule({
  declarations: [
    TreeRexStoreComponent
  ],
  imports: [
    CommonModule,
    TreeRexStoreRoutingModule
  ]
})
export class TreeRexStoreModule { }
