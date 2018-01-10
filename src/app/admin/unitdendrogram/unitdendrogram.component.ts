import { Component, Inject, OnInit, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TreeNode } from 'primeng/primeng';

import { UnitdendrogramService } from './unitdendrogram.service';
import { Json } from '../../classes/json';

import { FormGroup, FormBuilder } from '@angular/forms';

import { EventBusService } from './../../services/event-bus.service';

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
    private request: UnitdendrogramService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private eventBus: EventBusService
  ) { }

  routerLink() {
  }

  ngOnInit() {
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

  nodeSelect(event) {
    this.eventBus.emit('SelectNode', event.node);
    this.request.SelectNode = event.node;
  }

  routerPage(path) {
    this.router.navigate([path],  { relativeTo: this.route });
  }

}
