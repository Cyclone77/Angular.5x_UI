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

  url = 'http://192.168.0.50:8080/api/Core/Module_Select';

  tableData: any[] = [];
  constructor(
    private router: Router,
    private http: GAjaxService
  ) { }

  ngOnInit() {
    this.http.get(this.url).then((json: Json) => {
      const arr = json.ListData;
      this.tableData = <any[]>arr;
    }, err => {
      console.log(err);
    });
  }
}
