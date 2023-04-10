import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-remove-item',
  templateUrl: './form-remove-item.component.html',
  styleUrls: ['./form-remove-item.component.scss']
})
export class FormRemoveItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormRemoveItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {}

  cancel(){
    this.dialogRef.close();
  }
  
  delete(){
    this.dialogRef.close(true);
  }
}
