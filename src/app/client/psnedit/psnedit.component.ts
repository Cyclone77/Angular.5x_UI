import { Component, OnInit, AfterViewInit, ViewChild, forwardRef, Inject } from '@angular/core';
import { TreeModule, TreeNode, Tree, LazyLoadEvent } from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuItem } from 'primeng/primeng';
import { PsneditService } from './psnedit.service';
import { Json } from '../../classes/json';
import { HttpDataType } from '../../classes/http-data-type';

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
  tblData: any[];
  cols = [{
    field: 'A0107_CN',
    header: '性别',
    width: 10
  }, {
    field: 'A0111',
    header: '出生日期',
    width: 30
  }, {
    field: 'A0177',
    header: '证件号码',
    width: 30
  }, {
    field: 'B0001_CN',
    header: '单位',
    width: 50
  }];
  selectedNode: any;
  selectedValues: string[] = [];
  totalRecords: number;

  PClassID = '00001';

  @ViewChild('expandingTree') expandingTree: Tree;
  constructor(
    private request: PsneditService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.items = [
      { label: '在职人员库', icon: 'fa-bar-chart', command: (event) => {
        this.PClassID = '00001';
      }},
      { label: '离退人员', icon: 'fa-calendar' , command: (event) => {
        this.PClassID = '00002';
      }},
      { label: '借工人员', icon: 'fa-book' , command: (event) => {
        this.PClassID = '00021';
      }}
    ];
    this.nodeExpand();
    // this.loadResumeData();
  }

  loadResumeData(event?: LazyLoadEvent) {
    const data = {
      UnitId: this.selectedNode ? this.selectedNode.data['UNIT_ID'] : '',
      PClassId: this.PClassID,
      Ascription: this.selectedValues.toString(),
      ModuleId: 'M00003',
      SetID: 'A01',
      PageSize: event && event.rows || 10,
      PageIndex: event && event.first || 1
    };
    this.request.getResume(data).then((json: Json) => {
      this.totalRecords = json.SignData;
      this.tblData = json.ListData;
    });
  }

selectRow(row) {
    this.request.Person_Data = row;
    this.router.navigate(['subset-list'], { relativeTo: this.route });
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.loadResumeData(event);
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
    // this.treeData.forEach( node => {
    //   this.expandRecursive(node, true);
    // });
    // this.expandingTree.selection = this.treeData[0]['children'][1];
    // this.expandingTree.isSelected(this.treeData[0]['children'][1]);
    // this.selectedNode = this.treeData[0]['children'][1];
  }

  nodeSelect(event) {
    this.loadResumeData();
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
