import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TreeNode } from 'primeng/primeng';

import { AuthorizationService } from './authorization.service';
import { Json } from '../../classes/json';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  tableData: any[] = [];
  selectNode: TreeNode;
  treeData: TreeNode[] = [];
  selectedNode: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: AuthorizationService
  ) { }

  ngOnInit() {
    this.nodeExpand();
  }

  nodeExpand(event?) {
    this.request.getModuleTree(event && event.node.data).then((json: Json) => {
      // tslint:disable-next-line:prefer-const
      let nodes: TreeNode[] = [];
      json.ListData.forEach(item => {
        nodes.push({
          label: item['GROUP_NAME'],
          data: item['GROUP_ID'],
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder',
          leaf: !item['HASCHILD']
        });
      });
      if (event && event.node.data) {
        event.node.children = nodes;
      } else {
        this.treeData = nodes;
      }
    });
  }

  nodeSelect(event) {
    this.request.SelectNode = this.selectNode = event.node;
    this.loadTbl();
  }

  loadTbl() {
    this.request.getModuleTbl(this.selectNode.data).then((json: Json) => {
      this.tableData = json.ListData;
    });
  }

  eidtModule(row) {
    const id = row.rowData['GROUP_ID'];
    this.request.SelectTblRow = row.rowData;
    this.router.navigate(['edit'], { relativeTo: this.route });
  }


  delModule(row) {
    const id = row.rowData['GROUP_ID'];
    this.request.deleteModule(id).then((json: Json) => {
      if (json.IsSucceed) {
        this.tableData = json.ListData;
        this.nodeExpand();
      }
    });
  }

  addGroup() {
    this.router.navigate(['add'],  { relativeTo: this.route });
  }
}
