import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectitem(e) {
    switch (e.value) {
      case 'quit':
        this.router.navigate(['/login']);
        break;
    }
  }
}
