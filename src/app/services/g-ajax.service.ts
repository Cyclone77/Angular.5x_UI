import { Injectable, } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserOption } from './../classes/user-login';
import { ElMessageService } from 'element-angular';

@Injectable()
export class GAjaxService {

  myHeaderJSON = { 'Content-Type': 'application/json' };

  constructor(
    private http: HttpClient,
    private userOpt: UserOption,
    private router: Router,
    private message: ElMessageService
  ) { }

  // 构建header
  buildHeader(header) {
    this.userOpt = <UserOption>JSON.parse(sessionStorage.getItem('GLPROGECT_001')) || {} as UserOption;
    const headerJSON = Object.assign(
      {
        'Authorization': this.userOpt.Authorization,
         'SessionID': this.userOpt.SessionID
      }, Object.assign(this.myHeaderJSON, header));
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
        if (err.status === 401 || err.status === 504) {
          this.redirectLogin();
        } else {
          reject(err);
        }
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
        if (err.status === 401 || err.status === 504) {
          this.redirectLogin();
        } else {
          reject(err);
        }
      });
    });
  }

  // 重定向到登录页
  redirectLogin() {
    const that = this;
    this.message.show('登录超时即将跳转到登录页!');
    setTimeout(function(){
      that.router.navigate(['/login']);
    }, 1000);
  }
}
