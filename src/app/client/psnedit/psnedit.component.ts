import { Component, OnInit, AfterViewInit, ViewChild, forwardRef, Inject } from '@angular/core';
import { TreeModule, TreeNode, Tree } from 'primeng/primeng';


@Component({
  selector: 'app-psnedit',
  templateUrl: './psnedit.component.html',
  styleUrls: ['./psnedit.component.css']
})
export class PsneditComponent implements OnInit {

  psnStyle = {
    'width': '260px'
  };
  treeData: TreeNode[];
  selectedNode: any;

  @ViewChild('expandingTree') expandingTree: Tree;
  constructor() {}

  ngOnInit() {
    this.treeData = [{
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
              "label": "Work",
              "data": "Work Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
          },
          {
              "label": "Home",
              "data": "Home Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
          }]
    }];

    // this.expandingTree.isSelected(this.treeData[0]);
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
