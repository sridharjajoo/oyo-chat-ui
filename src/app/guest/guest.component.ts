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
  public data5 : Array<Response>;
  public data6 : Array<Response>;
  public data7 : Array<Response>;
  public res1 : Array<Response>;
  public options : Array<Response>;
  public reply1: string;
  public reply2: string;
  public reply3: string;
  public reply4: string;
  public reply5: string;
  public reply6: string;
  public shouldFetch: boolean;
  toggle = true;
  status = 'Enable'; 

  constructor(
    private responseService: ResponseService, 
    private share: SharedService) {}

  ngOnInit(): void {
    this.data1 = new Array<Response>();
    this.data2 = new Array<Response>();
    this.data3 = new Array<Response>();
    this.data4 = new Array<Response>();
    this.data5 = new Array<Response>();
    this.data6 = new Array<Response>();
    this.data7 = new Array<Response>();
    this.responseService.getAllCustomer().subscribe(res => {
      this.data1 = res.second;
      this.shouldFetch = false;
      console.log(res);
    })

    setInterval(() => {
      this.onRefresh();
    }, 1000);
  }

  onClick(i : any) {
    // this.toggle = !this.toggle;
    // this.status = this.toggle ? 'Enable' : 'Disable';
    console.log(i)
    this.responseService.chooseUserType("customer", i.id).subscribe(res => {
      console.log(res);
    });
    this.shouldFetch = true;
  }

  onRefresh() {
    console.log(this.shouldFetch);
    if (this.shouldFetch == true) {
    this.responseService.getAllCustomer().subscribe(res => {
      if (this.data2.length == 0 && res != null) {
        document.getElementById('d1').style.display = "";
        this.reply1 = res.first.text;
        this.data2 = res.second;
        this.shouldFetch = false;
      } else if (this.data3.length == 0 && res != null) {
        document.getElementById('d2').style.display = "";
        this.reply2 = res.first.text;
        this.data3 = res.second;
        this.shouldFetch = false;
      } else if (this.data4.length == 0 && res != null) {
        document.getElementById('d3').style.display = "";
        this.reply3 = res.first.text;
        this.data4 = res.second;
        this.shouldFetch = false;
      } else if (this.data5.length == 0 && res != null){
        document.getElementById('d4').style.display = "";
        this.reply4 = res.first.text;
        this.data5 = res.second;
        this.shouldFetch = false;
      } else if(this.data6.length == 0 && res != null) {    
        document.getElementById('d5').style.display = "";
        this.reply5 = res.first.text;
        this.data6 = res.second;
        this.shouldFetch = false;
      } else if(this.data7.length == 0 && res != null) {    
        document.getElementById('d6').style.display = "";
        this.reply6 = res.first.text;
        this.data7 = res.second;
        this.shouldFetch = false;
      }
    })}
  }
}
