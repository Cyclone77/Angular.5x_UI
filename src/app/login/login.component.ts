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
    private router: Router,
    private user: UserService,
    private message: ElMessageService,
    private usrData: UserLogin
  ) { }

  ngOnInit() {
  }

  login() {
    this.user.login(this.usrData, () => {
      this.router.navigate(['/client']);
    });
    // this.router.navigate(['/client']);
  }
}
