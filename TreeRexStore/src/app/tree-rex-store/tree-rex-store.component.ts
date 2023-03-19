import { TreeRexStoreService } from './service/tree-rex-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-rex-store',
  templateUrl: './tree-rex-store.component.html',
  styleUrls: ['./tree-rex-store.component.scss']
})
export class TreeRexStoreComponent implements OnInit {
  constructor(
    private _treeRex : TreeRexStoreService
  ) { }

  ngOnInit(): void {
    this._treeRex.getItemList().subscribe(res=>{
      console.log(res)
    })
  }

}
