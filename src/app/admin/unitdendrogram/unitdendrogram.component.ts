import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-unitdendrogram',
  templateUrl: './unitdendrogram.component.html',
  styleUrls: ['./unitdendrogram.component.css']
})
export class UnitdendrogramComponent implements OnInit {

  data: TreeNode[];
  constructor() { }

  ngOnInit() {
    this.data = [{
      label: 'Root',
      expanded: true,
      children: [
          {
              label: 'Child 1',
              expanded: true,
              children: [
                  {
                      label: 'Grandchild 1.1'
                  },
                  {
                      label: 'Grandchild 1.2'
                  }
              ]
          },
          {
              label: 'Child 2',
              expanded: true,
              children: [
                  {
                      label: 'Child 2.1'
                  },
                  {
                      label: 'Child 2.2'
                  }
              ]
          }
      ]
  }];
  }

}
