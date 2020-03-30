import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/service/response.service';
import { HttpClient } from '@angular/common/http';
import {Response} from 'src/app/VO/response';
import { MatDialog } from '@angular/material/dialog';
import { OptionsDialogComponent } from '../options-dialog/options-dialog.component';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public data1 : Array<Response>;
  public data2 : Array<Response>;
  public data3 : Array<Response>;
  public data4 : Array<Response>;
  public reply1: string;
  public reply2: string;
  public reply3: string;
  public reply0: string;

  constructor(private responseService: ResponseService, 
    private share: SharedService) { }

  ngOnInit() {
    this.data1 = new Array<Response>();
    this.data2 = new Array<Response>();
    this.data3 = new Array<Response>();
    this.data4 = new Array<Response>();
    this.responseService.getAllPm().subscribe(res => {
      if (res != null) {
       document.getElementById('d0').style.display = "";
      } else {
        document.getElementById('d0').style.display = 'none';
      }
      this.data1 = res.second;
      this.reply0 = res.first.text;
      console.log(res);
    })
  }

  onClick(i : any) {
    this.responseService.chooseUserType("pm", i.id).subscribe(res => {
      console.log(res);
    })
    console.log(i);
  }

  poller() {
    this.responseService.getAllPm().subscribe(res => {
      // this.data = res.second;
      console.log(res);
    })
  }

  onRefresh() {
    this.responseService.getAllPm().subscribe(res => {
      if (this.data1.length == 0) {
        this.data1 = res.second;
      } else if (this.data2.length == 0) {
        document.getElementById('d1').style.display = "";
        this.reply1 = res.first.text;
        this.data2 = res.second;
      } else if (this.data3.length == 0) {
        document.getElementById('d2').style.display = "";
        this.reply2 = res.first.text;
        this.data3 = res.second;
      } else if (this.data4.length == 0) {
        document.getElementById('d3').style.display = "";
        this.reply3 = res.first.text;
        this.data4 = res.second;
      }
    })
  }
}
