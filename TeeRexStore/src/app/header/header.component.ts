import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeeRexStoreService } from '../tee-rex-store/service/tee-rex-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm!:FormGroup
  constructor(
    private _route: Router,
    private _treeRex: TeeRexStoreService
  ) { }

  ngOnInit(): void {
    this.initialize()
   }

   initialize(){
    this.searchForm = new FormGroup({
      searchValue: new FormControl('')
    })
   }
  
  cart() {
    this._route.navigate(['/tee-rex/cart']);
  }
  productList() {
    this._route.navigate([''])
  }
}
