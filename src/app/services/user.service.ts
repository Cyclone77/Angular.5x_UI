import { Injectable } from '@angular/core';
import { UserLogin, UserOption } from './../classes/user-login';
import { Json } from './../classes/json';
import { ElMessageService } from 'element-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserService {

  url = 'http://192.168.0.50:8080/api/Core/Login';
  myHeaderJSON = { 'Content-Type': 'application/json' };
  constructor(
    private http: HttpClient,
    private message: ElMessageService,
    private userOpt: UserOption
  ) { }

  login(user: UserLogin, fn) {
    const httpHead = { headers: new HttpHeaders(this.myHeaderJSON) };
    this.http.post(this.url, user, httpHead).subscribe((json: Json) => {
      if (json.IsSucceed) {
        Object.assign(this.userOpt, json.Data);
        if (typeof fn === 'function') {
          fn();
        }
      } else {
        this.message.show('帐号和密码不匹配！');
      }
    }, (err: HttpErrorResponse)  => {
      console.log(err);
      this.message.show('帐号和密码不匹配！');
    });
  }

  getUserOpt() {
    return this.userOpt;
  }
}
