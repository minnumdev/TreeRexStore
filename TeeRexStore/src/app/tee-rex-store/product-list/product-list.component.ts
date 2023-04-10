import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TeeRexStoreService } from '../service/tee-rex-store.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: any;
  public searchKey: string = "";
  public cartListItem: any[] = [];
  constructor(
    private _treeRex: TeeRexStoreService,
    private _cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._treeRex.search.subscribe(res => {
      this.searchKey = res;
    })
    this.cartListItem = JSON.parse(localStorage.getItem("cartItems") || '[]')??[];
    if(this.cartListItem.length){
      this._treeRex.cartItemCount(this.cartListItem);
    }
  }

  addToCart(item: any) {
    const val = this.cartListItem.find(x => x.id === item.id);
    if (!val) {
      this.cartListItem.push({ ...item, cQty: 1, cPrice: item.price })
      this._snackBar.open(item.name + " " + "added to the cart successfully!", "Ok", { duration: 1000 });
    } else {
      if (val.quantity >= val.cQty + 1) {
        val.cQty += 1
        val.cPrice = val.price*val.cQty
        this._snackBar.open("You have this item in your cart we have increased the quantity by 1!", "Ok", { duration: 1000 })
      } else {
        this._snackBar.open("You have this item in your cart with maximum available quantity!", "Ok", { duration: 1000 })
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(this.cartListItem));
    this._treeRex.cartItemCount(this.cartListItem);
  }
}
