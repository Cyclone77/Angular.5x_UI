import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-salaryentering',
  templateUrl: './salaryentering.component.html',
  styleUrls: ['./salaryentering.component.css']
})
export class SalaryenteringComponent implements OnInit {

  treeData: TreeNode[];
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

}
