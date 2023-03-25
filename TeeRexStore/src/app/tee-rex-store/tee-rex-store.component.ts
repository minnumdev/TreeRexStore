import { TeeRexStoreService } from './service/tee-rex-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tee-rex-store',
  templateUrl: './tee-rex-store.component.html',
  styleUrls: ['./tee-rex-store.component.scss']
})
export class TeeRexStoreComponent implements OnInit {
  constructor(
    private _treeRex : TeeRexStoreService
  ) { }

  ngOnInit(): void {
    this._treeRex.getItemList().subscribe(res=>{
      console.log(res)
    })
  }

}
