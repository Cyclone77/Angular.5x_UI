
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import {TreeNode, InputSwitch} from 'primeng/primeng';

import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

import { UsermoduleManageService } from './usermodule-manage.service';
import { Json } from '../../../classes/json';

@Component({
  selector: 'app-usermodule-manage',
  templateUrl: './usermodule-manage.component.html',
  styleUrls: ['./usermodule-manage.component.css'],
  providers: [MessageService]
})
export class UsermoduleManageComponent implements OnInit {

  tableData: any[] = [];
  selectedNode: TreeNode;
  treeData: TreeNode[] = [];
  Succ = 'success';
  Err = 'error';
  Warn = 'warn';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UsermoduleManageService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.nodeExpand();
  }

  nodeExpand(event?) {
    this.request.getModuleTree(event && event.node.data.keyId).then((json: Json) => {
      // tslint:disable-next-line:prefer-const
      let nodes: TreeNode[] = json.Entity;
      if (event && event.node) {
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
    const keyId = this.selectedNode.data.type === 'T' ? '-5' : this.selectedNode.data.keyId;
    this.request.mod_select(keyId).then((json: Json) => {
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
        this.showMsg('ɾ���ɹ�', this.Succ);
      } else {
        this.showMsg(json.Entity, this.Warn);
      }
    });
  }

  addGroup() {
    this.router.navigate(['add'],  { relativeTo: this.route });
  }
  showMsg(msg: string, type: string) {
    this.messageService.add({severity: type, summary: 'ϵͳ��Ϣ', detail: msg });
  }
}


