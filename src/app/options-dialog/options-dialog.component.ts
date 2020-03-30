import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.css']
})
export class OptionsDialogComponent implements OnInit {

  select : any;

  constructor(
    private dialogRef : MatDialogRef<OptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    console.log(this.data.data);
  }

  func() {
    this.dialogRef.close(this.select);
    console.log(this.select)
  }
}
