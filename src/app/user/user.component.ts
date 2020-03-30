import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/service/response.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private responseService: ResponseService, private http: HttpClient) { }

  ngOnInit() {
    console.log(window.location.href);
    var str = window.location.href;
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    console.log(result)
    
    this.responseService.getAll().subscribe(res => {
      console.log(res);
    })

    // this.http.get('http://localhost:8080/get-all-queries-cypher').subscribe(res => {
    //   console.log(res);
    // });
  }
  
}
