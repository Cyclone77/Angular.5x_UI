import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ElMessageService } from 'element-angular';

import { UserLogin } from './../classes/user-login';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private user: UserService,
    private router: Router,
    public usrData: UserLogin
  ) { }

  ngOnInit() {
  }

  login() {
    this.user.login(this.usrData).then(() => {
      this.router.navigate(['/client']);
    });
    // this.router.navigate(['/client']);
  }

  // 密码框回车事件
  keyUp(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }
}
