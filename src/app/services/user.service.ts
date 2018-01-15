import { Injectable } from '@angular/core';
import { UserLogin, UserOption } from './../classes/user-login';
import { Json } from './../classes/json';
import { ElMessageService } from 'element-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserService {

  loginUrl = '/api/Core/UserLogon/Login';
  logoutUrl = '/api/Core/UserLogon/Logout';
  notLoginHeaderJSON = { 'Content-Type': 'application/json' };
  loginHeaderJSON = {};

  userOpt = {} as UserOption;
  constructor(
    private http: HttpClient,
    private message: ElMessageService
  ) {
  }

  login(user: UserLogin) {
    return new Promise((resolve, reject) => {
      this.http.post(this.loginUrl, user, this.getHttpHeader(this.notLoginHeaderJSON)).subscribe((json: Json) => {
        if (json.IsSucceed) {
          Object.assign(this.userOpt, json.Data);
          this.setHeaderParams();
          resolve();
        } else {
          console.log(json.Err);
          if (json && json.Err) {
            this.message.show(json.Err);
          } else {
            this.message.show('帐号或密码不正确!');
          }
        }
      }, (err: HttpErrorResponse)  => {
        console.log(err);
        if (err && err.status === 504) {
          this.message.show('服务器响应超时!');
        } else {
          this.message.show('帐号或密码不正确!');
        }
      });
    });
  }

  logout() {
    this.getHeaderParams();
    return new Promise((resolve, reject) => {
      this.http.post(this.logoutUrl, null, this.getHttpHeader(this.loginHeaderJSON)).subscribe((json: Json) => {
        if (json.IsSucceed) {
          resolve();
        } else {
          console.log(json.Err);
          this.message.show(json.Err);
          resolve();
          // reject(json.Err);
        }
      }, (err: HttpErrorResponse)  => {
        console.log(err);
        this.message.show('未获取到用户信息,可能帐号已退出登录!');
        resolve();
      });
    });

  }

  getHttpHeader(jsonData: any) {
    return { headers: new HttpHeaders(jsonData) };
  }

  setHeaderParams() {
    this.userOpt.Authorization = this.userOpt['Token_type'] + ' ' + this.userOpt.Access_token;
    let sessionID = this.userOpt.SessionID;
    sessionID = '';
    sessionStorage.setItem('GLPROGECT_001', JSON.stringify(this.userOpt));
  }

  getHeaderParams() {
    const data = JSON.parse(sessionStorage.getItem('GLPROGECT_001'));
    if (!data) {
      this.message.show('未获取到用户数据!');
    }
    this.loginHeaderJSON['Authorization'] = data.Authorization;
    this.loginHeaderJSON['SessionID'] = data.SessionID;
  }
}
