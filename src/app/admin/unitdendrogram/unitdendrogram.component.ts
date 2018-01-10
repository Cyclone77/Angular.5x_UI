import { Component, Inject, OnInit, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TreeNode } from 'primeng/primeng';

import { UnitdendrogramService } from './unitdendrogram.service';
import { Json } from '../../classes/json';

import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-unitdendrogram',
  templateUrl: './unitdendrogram.component.html',
  styleUrls: ['./unitdendrogram.component.css']
})
export class UnitdendrogramComponent implements OnInit {

  validateForm: FormGroup;
  selectNode: TreeNode;
  treeData: TreeNode[] = [];
  selectedNode: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UnitdendrogramService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.nodeExpand();
    this.validateForm = this.formBuilder.group({
      B0301: [ '' ],
      B0302: [ '' ],
      B0303: [ '' ],
      B0304: [ '' ],
      B0305: [ '' ],
      B0306: [ '' ],
      B0307: [ '' ],
      B0308: [ '' ],
      B0309: [ '' ],
      B0310: [ '' ],
      B0311: [ '' ],
      B0312: [ '' ],
      B0313: [ '' ],
      B0314: [ '' ],
      B0315: [ '' ],
      B0316: [ '' ],
      B03END_DATE: [''],
      B03START_DATE: [''],
      DATA_ROW: [''],
      DISP_ORDER: [''],
      IS_DELETED: [''],
      IS_LAST_ROW: [''],
      KEY_ID: ['']
    });
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

  }

}
