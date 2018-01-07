import { Component, OnInit } from '@angular/core';
import { TreeModule, TreeNode } from 'primeng/primeng';

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
  constructor() { }

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
  }

  nodeSelect(event) {
    console.log(this.selectedNode);
    console.log(event);
  }

}
