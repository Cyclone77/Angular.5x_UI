import { Component, OnInit, AfterViewInit, ViewChild, forwardRef, Inject } from '@angular/core';
import { TreeModule, TreeNode, Tree } from 'primeng/primeng';

import { MenuItem } from 'primeng/primeng';
import { PsneditService } from './psnedit.service';
import { Json } from '../../classes/json';

@Component({
  selector: 'app-psnedit',
  templateUrl: './psnedit.component.html',
  styleUrls: ['./psnedit.component.css']
})
export class PsneditComponent implements OnInit {

  items: MenuItem[];
  psnStyle = {
    'width': '260px'
  };
  treeData: TreeNode[];
  selectedNode: any;
  selectedValues: string[] = [];

  @ViewChild('expandingTree') expandingTree: Tree;
  constructor(
    private request: PsneditService
  ) {}

  ngOnInit() {
    this.items = [
      {label: '在职人员库', icon: 'fa-bar-chart'},
      {label: '离退人员', icon: 'fa-calendar'},
      {label: '借工人员', icon: 'fa-book'}
    ];
    this.nodeExpand();
  }

  nodeExpand(event?) {
    this.request.getUnitTree(event && event.node.data['ITEM_ID']).then((json: Json) => {
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

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.treeData.forEach( node => {
      this.expandRecursive(node, true);
    });
    // this.expandingTree.selection = this.treeData[0]['children'][1];
    // this.expandingTree.isSelected(this.treeData[0]['children'][1]);
    this.selectedNode = this.treeData[0]['children'][1];
  }

  nodeSelect(event) {
    console.log(this.selectedNode);
    console.log(event);
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
  }

}
