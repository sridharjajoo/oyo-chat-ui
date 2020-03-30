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


  public getAllCustomer() : Observable<any> {
    const url = "http://localhost:8080/poll-nodes?userType=customer";
    return this.http.get(url, {
        headers: this.header
      });
  }

  public getAllPm() : Observable<any> {
    const url = "http://localhost:8080/poll-nodes?userType=pm";
    return this.http.get(url, {
        headers: this.header
      });
  }

  public chooseUserType(usertype, id) : Observable<any> {
    const url = "http://localhost:8080/chose?userType=" + usertype + "&id=" + id;
    return this.http.get(url, {
      headers: this.header
    })
  }
}
