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

  public data : Array<Response>;
  constructor(private responseService: ResponseService, 
    private share: SharedService) { }

  ngOnInit() {
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
    console.log(i);
  }
  
}
