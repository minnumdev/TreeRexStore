import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeeRexStoreService {
  public products: any[] = [];
  public search = new BehaviorSubject<any>('');
  public productList = new BehaviorSubject<any>([]);
  public cartTotals = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  public getItemList(): Observable<any> {
    return this.http.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json').pipe(
      tap((response: any) => {
        this.products = response;
        this.productList.next(this.products)
      })
    );
  }

  public cartItemCount(cartItems: any) {
    const totals = cartItems.reduce((a: any, b: {
      cPrice: any; cQty: any;
    }) => {
      a.cnt = a.cnt + b.cQty;
      a.total = a.total + b.cPrice;
      return a
    }, { cnt: 0, total: 0 });
    localStorage.setItem('totals', JSON.stringify(totals));
    this.cartTotals.next(totals);
  }

  public filteredProducts(arr: any) {
    //console.log('arr',arr,arr[3][0],arr[3][1]);
    
    const val = this.products.filter(x => (arr[0].includes(x.gender)|| arr[0].length === 0 ) &&  (arr[1].includes(x.color) || arr[1].length === 0)  && (arr[2].includes(x.type)|| arr[2].length === 0) && ((x.price >= arr[3][0] && x.price <= arr[3][1])) );
    //console.log('val',val);
    
    this.productList.next(val)
  }
}
