import { Component, OnInit, HostListener } from '@angular/core';
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

  // 监听事件
  @HostListener('window:keydown', ['$event'])
  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }

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
    this.router.navigate(['/client']);
  }
}
