import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void { }
  
  cart() {
    this._route.navigate(['/tree-rex/cart']);
  }
  productList() {
    this._route.navigate([''])
  }
}
