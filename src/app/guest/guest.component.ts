import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/service/response.service';
import { HttpClient } from '@angular/common/http';
import {Response} from 'src/app/VO/response';
import { MatDialog } from '@angular/material/dialog';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  public data : Array<Response>;
  constructor(private responseService: ResponseService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(window.location.href);
    var str = window.location.href;
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    this.responseService.getAll().subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }

  onClick(i : any) {
    console.log(i)
  }

}
