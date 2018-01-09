import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TreeNode } from 'primeng/primeng';

import { UnitdendrogramService } from './unitdendrogram.service';
import { Json } from '../../classes/json';


@Component({
  selector: 'app-unitdendrogram',
  templateUrl: './unitdendrogram.component.html',
  styleUrls: ['./unitdendrogram.component.css']
})
export class UnitdendrogramComponent implements OnInit {

  selectNode: TreeNode;
  treeData: TreeNode[] = [];
  selectedNode: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UnitdendrogramService
  ) { }

  ngOnInit() {
    this.nodeExpand();
  }

  nodeExpand(event?) {
    this.request.getUnitTree(event && event.node.data).then((json: Json) => {
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

}
