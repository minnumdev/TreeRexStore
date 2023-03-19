import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRexStoreRoutingModule } from './tree-rex-store-routing.module';
import { TreeRexStoreComponent } from './tree-rex-store.component';
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



@NgModule({
  declarations: [
    TreeRexStoreComponent
  ],
  imports: [
    CommonModule,
    TreeRexStoreRoutingModule,
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
    FlexLayoutModule

    
  ]
})
export class TreeRexStoreModule { }
