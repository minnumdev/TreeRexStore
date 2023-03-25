import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeeRexStoreService {
  
  public search = new BehaviorSubject<any>('');
  constructor(private http: HttpClient) { }

  public getItemList(): Observable<any> {
    return this.http.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
  }
}
