import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TreeModule, TreeNode } from 'primeng/primeng';

import { GAjaxService } from '../../services/g-ajax.service';
import { Json } from '../../classes/json';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  tableData: any[] = [];
  url = 'http://192.168.0.50:8080/api/Core/PolicyGroup_Select?parentId=.';
  delurl = 'http://192.168.0.50:8080/api/Core/PolicyGroup_Delete';
  treeData: TreeNode[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: GAjaxService
  ) { }

  ngOnInit() {
    this.http.get(this.url).then((json: Json) => {
      this.tableData = json.ListData;
      this.loadTree();
    });
  }

  loadTree() {
    this.tableData.forEach(item => {
        this.treeData.push({
          label: item['GROUP_NAME'],
          data: item['GROUP_ID'],
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder'
        });
    });
  }

  loadTbl() {
    this.http.get(this.url).then((json: Json) => {
      this.tableData = json.ListData;
    });
  }

  eidtModule(row) {
    const id = row.rowData['GROUP_ID'];
  }

  delModule(row) {
    const id = row.rowData['GROUP_ID'];
    this.http.post(this.delurl, { GROUP_ID : id }).then((json: Json) => {
      if (!json.IsSucceed) {
        console.log('删除错误！');
      }else {
        this.loadTbl();
      }
    }, err => {
      console.log(err);
    });
  }

  addGroup() {
    this.router.navigate(['add'],  { relativeTo: this.route });
  }
}
