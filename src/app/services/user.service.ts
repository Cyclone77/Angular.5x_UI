import { Injectable } from '@angular/core';
import { UserLogin, UserOption } from './../classes/user-login';
import { Json } from './../classes/json';
import { ElMessageService } from 'element-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserService {

  url = 'http://192.168.0.50:8080/api/Core/Login';
  myHeaderJSON = { 'Content-Type': 'application/json' };
  httpHead = { headers: new HttpHeaders(this.myHeaderJSON) };

  constructor(
    private http: HttpClient,
    private message: ElMessageService,
    private userOpt: UserOption
  ) {
  }

  login(user: UserLogin) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, user, this.httpHead).subscribe((json: Json) => {
        if (json.IsSucceed) {
          Object.assign(this.userOpt, json.Data);
          console.log(this.userOpt);
          resolve();
        } else {
          reject('帐号和密码不匹配！');
        }
      }, (err: HttpErrorResponse)  => {
        console.log(err);
        reject('帐号和密码不匹配！');
      });
    });
  }

  getUserOpt() {
    console.log(this.userOpt);
    return this.userOpt;
  }
}
