import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ElMessageService } from 'element-angular';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  url = 'http://192.168.0.50:8080/api/Core/GetSetItems';
  url1 = 'http://192.168.0.50:8080/api/Core/GetUserOnline';
  tableData: any[] = [];
  userOnline = [];
  json = Object.assign({
    'Content-Type': 'application/json'
  }, {
    Authorization: 'Bearer ' + sessionStorage.getItem('Authorization'),
    SessionID: sessionStorage.getItem('SessionID')
  });
  myHttpHead = { headers: new HttpHeaders(this.json) };
  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.http.get(this.url, this.myHttpHead).subscribe(data => {
      this.tableData = data['ListData'];
    });

    this.http.get(this.url1, this.myHttpHead).subscribe(data => {
      this.userOnline = data['Entity'];
    });
  }

}
