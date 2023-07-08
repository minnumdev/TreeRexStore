import { TeeRexStoreService } from './service/tee-rex-store.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tee-rex-store',
  templateUrl: './tee-rex-store.component.html',
  styleUrls: ['./tee-rex-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeeRexStoreComponent implements OnInit {
  public productList !: any[];
  constructor(
    private _treeRex : TeeRexStoreService,
    private _cd : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this._treeRex.getItemList().subscribe(res=>{
      setTimeout(() => {
        this._treeRex.productList.subscribe(res => {      
          this.productList =  res; 
          this._cd.detectChanges();
        });
      }, 1);
    })   
  }
}
