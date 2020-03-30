import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
pm: string;
user: any;
selected: string;
guest: string;
  constructor(private router: Router) { }

  ngOnInit() {}  
  login() : void {
      console.log(this.selected);
      if (this.selected == 'pm') {
        window.open("pm");
      } else {
        window.open("guest");   
      }
  }
}
