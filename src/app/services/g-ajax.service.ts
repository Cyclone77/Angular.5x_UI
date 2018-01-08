import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UserOption } from './../classes/user-login';

@Injectable()
export class GAjaxService {

  myHeaderJSON = { 'Content-Type': 'application/json' };

  constructor(
    private http: HttpClient,
    private userOpt: UserOption
  ) { }

  // 构建header
  buildHeader(header) {
    this.userOpt = <UserOption>JSON.parse(sessionStorage.getItem('GLPROGECT_001')) || {} as UserOption;
    const headerJSON = Object.assign(this.userOpt,  Object.assign(this.myHeaderJSON, header));
    const httpHead = { headers: new HttpHeaders(headerJSON) };
    return httpHead;
  }

  // get方法
  get(url: string, header?: any) {
    return new Promise((resolve, reject) => {
      if (url.length === 0) {
        reject('URL不能为空！');
      }

      this.http.get(url, this.buildHeader(header)).subscribe(data => {
        resolve(data);
      }, (err: HttpErrorResponse)  => {
        reject(err.error.message);
      });
    });
  }

  // post方法
  post(url: string, option = {}, header?: any) {
    return new Promise((resolve, reject) => {
      if (url.length === 0) {
        reject('URL不能为空！');
      }
      this.http.post(url, option, this.buildHeader(header)).subscribe(data => {
        resolve(data);
      }, (err: HttpErrorResponse)  => {
        reject(err.error);
      });
    });
  }
}
