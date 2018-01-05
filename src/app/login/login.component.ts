import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ElMessageService } from 'element-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = 'http://192.168.0.50:8080/api/Core/Login';

  myHttpHead = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  usrData = {
    UserAccount: '',
    Password: ''
  };
  constructor(
    private router: Router,
    private http: HttpClient,
    private message: ElMessageService
  ) { }

  ngOnInit() {
  }

  login() {

    this.http.post(this.url, JSON.stringify(this.usrData), this.myHttpHead).subscribe(data => {
      if (<boolean>data['IsSucceed']) {
        console.log(data['Data']['TokenObj']['access_token']);
        console.log(data['Data']['TokenObj']['profile']['sid']);

        sessionStorage.setItem('Authorization', data['Data']['TokenObj']['access_token']);
        sessionStorage.setItem('SessionID', data['Data']['TokenObj']['profile']['sid']);
        this.router.navigate(['/client']);
      } else {
        this.message.show('帐号和密码不匹配！');
      }
    });
    // this.message.show('帐号和密码不能为空！');
    // this.router.navigate(['/client']);
  }
}
