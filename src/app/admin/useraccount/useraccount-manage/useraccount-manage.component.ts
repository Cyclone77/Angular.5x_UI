
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// UI
import { TreeNode } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

import { UseraccountManageService } from './useraccount-manage.service';
import { Json } from '../../../classes/json';

@Component({
  selector: 'app-useraccount-manage',
  templateUrl: './useraccount-manage.component.html',
  styleUrls: ['./useraccount-manage.component.css'],
  providers: [MessageService]
})
export class UseraccountManageComponent implements OnInit {

  tableData: any[] = [];
  selectedNode: TreeNode;
  treeData: TreeNode[] = [];
  Succ = 'success';
  Err = 'error';
  Warn = 'warn';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UseraccountManageService,
    private messageService: MessageService
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
      if (nodes.length > 0) {
        this.request.SelectNode = this.selectedNode = nodes[0];
        this.loadTbl();
      }
    });
  }

  nodeSelect(event) {
    this.request.SelectNode = this.selectedNode = event.node;
    this.loadTbl();
  }

  loadTbl() {
    this.request.mod_select(this.selectedNode.data).then((json: Json) => {
      json.ListData.map(function(item){
        item['IS_ADMIN'] = item['IS_ADMIN'] ? '是' : '否';
      });
      this.tableData = json.ListData;
    });
  }

  eidtModule(row) {
    this.request.SelectTblRow = this.tableData[row['index']];
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  delModule(row) {
    const rowdata = this.tableData[row['index']];
    this.request.mod_delete(rowdata['USERID']).then((json: Json) => {
      if (json.IsSucceed) {
        this.tableData = json.ListData;
        this.nodeExpand();
        this.showMsg('删除成功', this.Succ);
      } else {
        this.showMsg(json.Entity, this.Warn);
      }
    });
  }

  addGroup() {
    this.router.navigate(['add'],  { relativeTo: this.route });
  }
  showMsg(msg: string, type: string) {
    this.messageService.add({severity: type, summary: '系统消息', detail: msg });
  }
}

