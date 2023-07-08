import { Component, OnInit } from '@angular/core';
import { TeeRexStoreService } from '../service/tee-rex-store.service';
import { FormRemoveItemComponent } from '../form-remove-item/form-remove-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartList: any[] = [];
  public total !: any;
  constructor(
    private _teeRex: TeeRexStoreService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._teeRex.setUpTopBar("",true, false, true);
    this.cartList = JSON.parse(localStorage.getItem("cartItems") || '[]') ?? [];
    if (this.cartList.length) {
      this._teeRex.cartTotals.subscribe(res => {
        if (res) {
          this.total = res.total;
        }
      })
      if (!this.total) {
        this.total = JSON.parse(localStorage.getItem("totals") || '[]').total ?? 0;
      }
    }
  }

  qtyChange(event: any, item: any) {
    this.cartList = this.cartList.map(x => {
      if (x.id === item.id) {
        item.cQty = event;
        item.cPrice = x.price * event;
      }
      return x;
    })
    localStorage.setItem("cartItems", JSON.stringify(this.cartList));
    this._teeRex.cartItemCount(this.cartList);
  }

  remove(item:any){
    const dialogRef = this.dialog.open(FormRemoveItemComponent, {
      width: "600px",
      disableClose: true,
      data: item.name,
    })
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this.cartList.splice(this.cartList.findIndex(x=>x.id===item.id),1);
        localStorage.setItem("cartItems", JSON.stringify(this.cartList)); 
        this._teeRex.cartItemCount(this.cartList); 
      }
    }) 
  }
}
