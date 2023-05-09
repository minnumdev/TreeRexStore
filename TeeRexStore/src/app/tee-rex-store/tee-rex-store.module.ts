import { SearchPipe } from './../shared/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeeRexStoreRoutingModule } from './tee-rex-store-routing.module';
import { TeeRexStoreComponent } from './tee-rex-store.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { FormRemoveItemComponent } from './form-remove-item/form-remove-item.component';  
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    TeeRexStoreComponent,
    CartComponent,
    ProductListComponent,
    FilterComponent,
    SearchPipe,
    FormRemoveItemComponent
  ],
  imports: [
    CommonModule,
    TeeRexStoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatSliderModule,
    NgxSliderModule
  ],
  exports:[FilterComponent]
})
export class TeeRexStoreModule { }
