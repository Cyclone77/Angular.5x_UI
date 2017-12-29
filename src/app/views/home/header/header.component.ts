import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private data: any[] = [{
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

  constructor() { }

  ngOnInit() {
  }

  selectitem(event, xx) {
    console.log(event);
  }
}
