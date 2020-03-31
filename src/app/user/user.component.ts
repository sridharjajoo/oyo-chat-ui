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
  public data5 : Array<Response>;
  public data6 : Array<Response>;
  public data7 : Array<Response>;
  public reply1: string;
  public reply2: string;
  public reply3: string;
  public reply0: string;
  public reply4: string;
  public reply5: string;
  public reply6: string;
  public shouldFetch: boolean;

  constructor(private responseService: ResponseService, 
    private share: SharedService) { }

  ngOnInit() {
    this.data1 = new Array<Response>();
    this.data2 = new Array<Response>();
    this.data3 = new Array<Response>();
    this.data4 = new Array<Response>();
    this.data5 = new Array<Response>();
    this.data6 = new Array<Response>();
    this.data7 = new Array<Response>();
    this.responseService.getAllPm().subscribe(res => {
      if (res.first.id != -1) {
       document.getElementById('d0').style.display = "";
      //  this.shouldFetch = false;
      } else {
        document.getElementById('d0').style.display = 'none';
      }
      this.data1 = res.second;
      this.reply0 = res.first.text;
      console.log(res);
    })

    // setInterval(() => {this.onRefresh()}, 1000);
  }

  onClick(i : any) {
    this.responseService.chooseUserType("pm", i.id).subscribe(res => {
      console.log(res);
    })
    // this.shouldFetch = true;
    console.log(i);
  }

  poller() {
    this.responseService.getAllPm().subscribe(res => {
      // this.data = res.second;
      console.log(res);
    })
  }

  onRefresh() {
    // if (this.shouldFetch == true) {
    this.responseService.getAllPm().subscribe(res => {
      if (this.data1.length == 0 && res != null) {
        this.data1 = res.second;
        // this.shouldFetch = false;
      } else if (this.data2.length == 0 && res != null) {
        document.getElementById('d1').style.display = "";
        this.reply1 = res.first.text;
        this.data2 = res.second;
        // this.shouldFetch = false;
      } else if (this.data3.length == 0 && res != null) {
        document.getElementById('d2').style.display = "";
        this.reply2 = res.first.text;
        this.data3 = res.second;
        // this.shouldFetch = false;
      } else if (this.data4.length == 0 && res != null) {
        document.getElementById('d3').style.display = "";
        this.reply3 = res.first.text;
        this.data4 = res.second;
        // this.shouldFetch = false;
      } else if (this.data5.length == 0 && res != null) {
        document.getElementById('d4').style.display = "";
        this.reply4 = res.first.text;
        this.data5 = res.second;
        // this.shouldFetch = false;
      } else if (this.data6.length == 0 && res != null) {
        document.getElementById('d5').style.display = "";
        this.reply5 = res.first.text;
        this.data6 = res.second;
        // this.shouldFetch = false;
      } else if (this.data7.length == 0 && res != null) {
        document.getElementById('d6').style.display = "";
        this.reply6 = res.first.text;
        this.data7 = res.second;
        // this.shouldFetch = false;
      }
    })
  }
}
