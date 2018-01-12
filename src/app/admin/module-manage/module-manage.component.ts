import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { GAjaxService } from './../../services/g-ajax.service';
import { Json } from '../../classes/json';

@Component({
  selector: 'app-module-manage',
  templateUrl: './module-manage.component.html',
  styleUrls: ['./module-manage.component.css']
})
export class ModuleManageComponent implements OnInit {

  Module_Select = './api/Core/Module/Select';

  tableData: any[] = [];
  constructor(
    private router: Router,
    private http: GAjaxService
  ) { }

   // 构建url
 url(action) {
    // return this.address.ADMIN_AUTHORIZATION + `${action}?GL=${+ new Date()}`;
    return `${action}?GL=${+ new Date()}`;
  }

  //#region 授权分组树
  // 获得模块树
  getModuleTable() {
    return this.http.get(this.url(this.Module_Select));
  }

  ngOnInit() {
    this.getModuleTable().then((json: Json) => {
      const arr = json.ListData;
      this.tableData = <any[]>arr;
    }, err => {
      console.log(err);
    });
  }



}
