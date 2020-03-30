import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  data: any;
  constructor() { 

  }

  ngOnInit() {

  }

  storeDate(data) {
    this.data = data;
  }

  fetchData() {
    return this.data;
  }
}
