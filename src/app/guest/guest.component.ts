import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/service/response.service';
import { HttpClient } from '@angular/common/http';
import {Response} from 'src/app/VO/response';
import { MatDialog } from '@angular/material/dialog';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  public data1 : Array<Response>;
  public data2 : Array<Response>;
  public data3 : Array<Response>;
  public data4 : Array<Response>;
  public res1 : Array<Response>;
  public options : Array<Response>;
  public reply1: string;
  public reply2: string;
  public reply3: string;
  public reply4: string;

  constructor(
    private responseService: ResponseService, 
    private share: SharedService) {}

  ngOnInit(): void {
    this.data1 = new Array<Response>();
    this.data2 = new Array<Response>();
    this.data3 = new Array<Response>();
    this.data4 = new Array<Response>();
    this.responseService.getAllCustomer().subscribe(res => {
      this.data1 = res.second;
      console.log(res);
    })
  }

  onClick(i : any) {
    console.log(i)
    this.responseService.chooseUserType("customer", i.id).subscribe(res => {
      console.log(res);
    });
  }

  onRefresh() {
    this.responseService.getAllCustomer().subscribe(res => {
      console.log(res.first.text)
      if (this.data2.length == 0) {
        this.reply1 = res.first.text;
        this.data2 = res.second;
      } else if (this.data3.length == 0) {
        this.reply2 = res.first.text;
        this.data3 = res.second;
      } else if (this.data4.length == 0) {
        this.data4 = res.second;
      }
    })
  }
}
