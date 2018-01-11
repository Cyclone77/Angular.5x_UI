import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { GAjaxService } from '../../../services/g-ajax.service';
import { Json } from '../../../classes/json';
import { SalaryEntertingService } from './salary-enterting.service';

@Component({
  selector: 'app-salary-entering',
  templateUrl: './salary-entering.component.html',
  styleUrls: ['./salary-entering.component.css']
})


export class SalaryEnteringComponent implements OnInit {
  selectNode: TreeNode;
  treeData: TreeNode[] = [];
  selectedNode: any;
  tblData: any[];
  constructor(
    private request: SalaryEntertingService
  ) { }

  ngOnInit() {
    this.nodeExpand();
  }

  nodeExpand(event?) {
    this.request.getOrgTreeData(event && event.node.data['ITEM_ID']).then((json: Json) => {
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
    });

  }

  nodeSelect(event) {

  }
}
