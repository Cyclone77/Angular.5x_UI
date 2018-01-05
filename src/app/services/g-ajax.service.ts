import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GAjaxService {

  myHeaderJSON = { 'Content-Type': 'application/json' };

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, fn: any, header: any) {
    if (url.length === 0) {
      fn({ Err: 'URL不能为空！'});
    }

    if (typeof fn !== 'function') {
      fn({ Err: '回调函数不存在！'});
    }

    const headerJSON = Object.assign(this.myHeaderJSON, header);
    const httpHead = { headers: new HttpHeaders(headerJSON) };
    this.http.get(url, httpHead).subscribe(data => {
      fn(data);
    }, (err: HttpErrorResponse)  => {
      fn({ Err: err.error.message });
    });
  }
}
