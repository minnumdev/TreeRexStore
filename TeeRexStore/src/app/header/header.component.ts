import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeeRexStoreService } from '../tee-rex-store/service/tee-rex-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm!: FormGroup;
  title!:string;;
  data!:any;
  public cartCount: number = 0;
  constructor(
    private _route: Router,
    private _teeRex: TeeRexStoreService
  ) { }

  ngOnInit(): void {
    this.initialize()
    this.initializeForm()
    this._teeRex.cartTotals.subscribe(res => {
      if (res) {
        this.cartCount = res.cnt;
      }
    })
    if(!this.cartCount){
      this.cartCount = JSON.parse(localStorage.getItem("totals")||'[]').cnt??0;
    }
  }

  initialize(){
    this._teeRex.setupTrigger.subscribe(res=>{
      this.title = !res?.title?"TeeRexStore":res?.title;
      this.data = res;
    })
  }

  initializeForm() {
    this.searchForm = new FormGroup({
      searchValue: new FormControl('')
    })
    this.searchForm.valueChanges.subscribe(data => {
      this._teeRex.search.next(data.searchValue)
    }
    )
  }

  cartItem() {
    this._route.navigate(['/tee-rex/cart']);
  }

  productList() {
    this._route.navigate([''])
  }
}
