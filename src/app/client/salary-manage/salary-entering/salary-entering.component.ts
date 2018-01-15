import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { GAjaxService } from '../../../services/g-ajax.service';
import { Json } from '../../../classes/json';
import { SalaryEntertingService } from './salary-enterting.service';
import { Message } from 'primeng/components/common/api';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-salary-entering',
  templateUrl: './salary-entering.component.html',
  styleUrls: ['./salary-entering.component.css']
})


export class SalaryEnteringComponent implements OnInit {
  // 树取数等待属性
  loading = false;
  // 表格取数等待属性
  tableLoading = false;
  // 选中第一个节点
  selectFirstNode = true;
  // 树结构
  treeData: TreeNode[] = [];
  // 选中的树节点
  selectedNode: any;
  // 表格数据
  tblData: any[];
  // 表格数据总数
  totalRecords: number;
  // 消息容器
  msgs: Message[] = [];

  constructor(
    private request: SalaryEntertingService
  ) { }

  ngOnInit() {
    this.nodeExpand();
  }

  nodeExpand(event?) {
    this.loading = true;
    this.request.getOrgTreeData(event && event.node.data['ITEM_ID']).then((json: Json) => {
      this.loading = false;
      // tslint:disable-next-line:prefer-const
      let nodes: TreeNode[] = [];
      json.ListData.forEach(item => {
        nodes.push({
          label: item['DisplayChapterName'],
          data: item,
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder',
          leaf: !item['CHILD']
        });
      });
      if (event && event.node.data) {
        event.node.children = nodes;
      } else {
        this.treeData = nodes;
      }
      if (nodes && nodes.length > 0 && this.selectFirstNode) {
        this.selectedNode = nodes[0];
        this.selectFirstNode = false;
        this.getTableData(null, nodes[0]);
      }
    });

  }

  nodeSelect(event) {
    this.getTableData(event, event.node);
  }

  loadCarsLazy(event: LazyLoadEvent) {
    if (this.selectedNode) {
      this.getTableData(event, this.selectedNode);
    }
  }

  getTableData(event, node?: TreeNode) {
    if (node && node.data && node.data.ITEM_TYPE === 'N') {
      const data = {
        UnitId: node.data.UNIT_ID ? node.data.UNIT_ID : 0,
        ModuleId: 'M00001',
        SetID: 'SALARY',
        StartRowIndex: event &&  event.first || 1,
        PageSize: event && event.rows || 15
      };
      this.tableLoading = true;
      this.request.getTableData(data).then((json: Json) => {
        this.tableLoading = false;
        if (!json.IsSucceed) {
          return this.showError(json.Err);
        }
        this.totalRecords = json.SignData;
        this.tblData = json.ListData;
      });
    }
  }

  showSuccess(val) {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: '系统提示', detail: val});
  }

  showError(val) {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: '系统提示', detail: val});
  }
}
