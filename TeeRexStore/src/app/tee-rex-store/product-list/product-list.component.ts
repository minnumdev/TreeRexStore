import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeeRexStoreService } from '../service/tee-rex-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public searchKey: string = "";
  public productList: any[] = [];
  constructor(
    private _treeRex: TeeRexStoreService,
    private _cd : ChangeDetectorRef
  ) { }
  ngOnInit(): void {
   
    console.log('productList', this.productList);
    
    this._treeRex.search.subscribe(res=>{
      if(res){
        this.searchKey = res;
      }
    })
    this.list();
  }

  list() {
    // this._treeRex.getItemList().subscribe(res => {
    //   this.productList = res;
    // })

    this._treeRex.productList.subscribe(res => {
      const list = res;
      this.productList = list;
      console.log('list',this.productList, list);
      this._cd.detectChanges();
    });
  }

  cart(item: any) {
    
  }
}
