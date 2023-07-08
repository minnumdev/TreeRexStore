import { ChangeDetectorRef, Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TeeRexStoreService } from '../service/tee-rex-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  @Input()
  productList!: any[];
  public filterVal: any[] = [];
  public gender: any[] = [];
  public type: any[] = [];
  public color: any[] = [];
  minValue!: number;
  maxValue!: number;
  min: number = 0;
  max: number = 0;
  constructor(
    private _teeService: TeeRexStoreService,
    private _cd: ChangeDetectorRef,
    private _route: Router
  ) { }
  ngOnInit(): void {
    if (!this.productList) {
      this._teeService.getItemList().subscribe(res => {
        setTimeout(() => {
          this._teeService.productList.subscribe(res => {
            this.productList = res;
            this.initialize();
          });
        }, 1);
      })
    }
    else {
      this.initialize();
    }
  }

  initialize() {
    this.filteredList();
    const val = [...new Set(this.productList.map(x => x.price))].sort((a, b) => a - b);
    this.minValue = this.min = val[0];
    this.maxValue = this.max = val[val.length - 1]
    this._cd.detectChanges();
  }
  filteredList() {
    const val = this.productList.reduce((a: { Color: any[]; price: string[]; Type: any[]; }, c: { color: any; price: number; type: any; }) => {
      if (!a.Color.includes(c.color)) {
        a.Color.push(c.color);
      }
      if (!a.Type.includes(c.type)) {
        a.Type.push(c.type);
      }
      return a;
    }, { Gender: ['Female', 'Men'], Color: [], Type: [] })
    if (val.Color.length) {
      this.filterVal.push(val);
      this._cd.detectChanges();
    }
  }

  onSliderChange(event: Event, type: any) {
    let val = (event.target as HTMLInputElement).valueAsNumber
    if (type == 'min') {
      this.min = val;
    } else {
      this.max = val;
    }
    this._teeService.filteredProducts([this.gender, this.color, this.type, [this.min, this.max]])
  }

  filterCheck(val: any, event: any, key: any) {
    if (event?.checked) {
      if (key == "Gender" && !this.gender.includes(val)) {
        this.gender.push(val);
      }
      else if (key == "Color" && !this.color.includes(val)) {
        this.color.push(val);
      }
      else if (key == "Type" && !this.type.includes(val)) {
        this.type.push(val);
      }
    }
    else if (!event?.checked) {
      this.gender = key === "Gender" ? this.gender.filter(x => x != val) : this.gender;
      this.color = key === "Color" ? this.color.filter(x => x != val) : this.color;
      this.type = key === "Type" ? this.type.filter(x => x != val) : this.type;
    }
    this._teeService.filteredProducts([this.gender, this.color, this.type, [this.min, this.max]])
  }

  apply(){
   localStorage.setItem("filter", JSON.stringify({'gender':this.gender, 'color':this.color, 'type':this.type,'price': [this.min, this.max]}));
   this._route.navigate([''])
  }
}
