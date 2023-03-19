import { Component, OnInit } from '@angular/core';
import { TreeRexStoreService } from '../service/tree-rex-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  public productList: any[] = [];
  constructor(
    private _treeRex: TreeRexStoreService
  ) { }
  ngOnInit(): void {
    this.list()
  }

  list() {
    this._treeRex.getItemList().subscribe(res => {
      this.productList = res;
    })
  }

  cart(item: any) {
    
  }
}
