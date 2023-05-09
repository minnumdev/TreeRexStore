import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TeeRexStoreService } from '../service/tee-rex-store.service';
import { MatSliderChange, MatSliderDragEvent } from '@angular/material/slider';
import { Options } from 'ng5-slider';
import { LabelType } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
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
    private _cd: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    
    setTimeout(() => {
      console.log("p",this.productList)
        if (this.productList.length) {
          console.log('prdList',this.productList.length);          
          this.filteredList();
          const val = [...new Set(this.productList.map(x => x.price))].sort((a, b) => a - b);
          this.minValue = this.min = val[0];
          this.maxValue = this.max = val[val.length - 1]
          this._cd.detectChanges();
        }      
    }, 1);
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
    console.log('event',event,val,key);
    
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
    else if(!event?.checked) {
      this.gender = key === "Gender" ? this.gender.filter(x => x != val) : this.gender;
      this.color = key === "Color" ? this.color.filter(x => x != val) : this.color;
      this.type = key === "Type" ? this.type.filter(x => x != val) : this.type;
      console.log('type', this.type);
    }
    
    
    this._teeService.filteredProducts([this.gender, this.color, this.type, [this.min, this.max]])
  }
  clearAll(){
  }
}
