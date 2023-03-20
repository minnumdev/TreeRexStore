import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TreeRexStoreService } from '../tree-rex-store/service/tree-rex-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm!:FormGroup
  constructor(
    private _route: Router,
    private _treeRex: TreeRexStoreService
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
    this._route.navigate(['/tree-rex/cart']);
  }
  productList() {
    this._route.navigate([''])
  }
}
