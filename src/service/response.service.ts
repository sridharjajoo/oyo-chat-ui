import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }
  
  private header: HttpHeaders = new HttpHeaders().set(
    'Accept',
    'application/json'
  ).set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Methods', 'GET')


  public getAll() : Observable<any> {
    const url = "http://localhost:8080/get-all-queries-cypher";
    return this.http.get(url, 
      {
        headers: this.header
      });
  }
}
