import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// import { UserService } from './../../services/user.service';
import { Json } from '../../classes/json';
import { GAjaxService } from '../../services/g-ajax.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  data: any[] = [{
    value: 'edit',
    label: '修改信息'
  }, {
    value: 'quit',
    label: '注销'
  }, {
    value: 'back',
    label: '返回主页',
    divided: true
  }, {
    value: 'suggest',
    label: '建议反馈'
  }];

  loginOutUrl = '/api/Core/UserLogon/Logout';
  constructor(
    private router: Router,
    private http: GAjaxService
    // private user: UserService
  ) { }

  ngOnInit() {
  }

  selectitem(e) {
    switch (e.value) {
      case 'quit':
        this.loginOut();
        break;
    }
  }

  loginOut() {
    this.http.post(this.loginOutUrl).then((json: Json) => {
      if (json.IsSucceed) {
        this.router.navigate(['/login']);
      }
    });
  }
}
