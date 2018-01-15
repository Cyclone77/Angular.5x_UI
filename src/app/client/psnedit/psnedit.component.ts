import { Component, OnInit, AfterViewInit, ViewChild, forwardRef, Inject, ChangeDetectorRef } from '@angular/core';
import { TreeModule, TreeNode, Tree, LazyLoadEvent } from 'primeng/primeng';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuItem } from 'primeng/primeng';
import { PsneditService } from './psnedit.service';
import { Json } from '../../classes/json';
import { HttpDataType } from '../../classes/http-data-type';
import { HttpEventType } from '@angular/common/http/src/response';

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
  selectedAscription = [];
  totalRecords: number;

  PClassID = '00001';
  PClassList: Array<any>;
  Ascription = [];

  @ViewChild('expandingTree') expandingTree: Tree;
  constructor(
    private request: PsneditService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.nodeExpand();
    // this.loadResumeData();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.loadAscriptionData();
    this.loadPClasstbl();
  }

  loadPClasstbl() {
    const unitId = this.selectedNode ? this.selectedNode.data['UNIT_ID'] : '';
    this.request.getPClassList({ unitId: unitId }).then((json: Json) => {
      if (json.IsSucceed) {
        this.PClassList = json.ListData;
        this.PClassID = this.PClassList[0]['ITEM_ID'];
        this.cdr.detectChanges();
        this.loadResumeData();
      }
    });
  }

  loadAscriptionData() {
    const unitId = this.selectedNode ? this.selectedNode.data['UNIT_ID'] : '';
    this.request.GetAscription({ pClassId: this.PClassID, unitId: unitId }).then((json: Json) => {
      if (json.IsSucceed) {
        this.Ascription = json.ListData;
      }
    });
  }

  handleChange(event) {
    this.PClassID = this.PClassList[event['index']]['ITEM_ID'];
    this.loadResumeData();
    this.loadAscriptionData();
  }

  onChangeAscr(event) {
    this.loadResumeData();
  }

  loadResumeData(event?: LazyLoadEvent) {
    const data = {
      UnitId: this.selectedNode ? this.selectedNode.data['UNIT_ID'] : '',
      PClassId: this.PClassID,
      Ascription: this.selectedAscription.toString(),
      ModuleId: 'M00003',
      SetID: 'A01',
      StartRowIndex: event &&  event.first || 1,
      PageSize: event && event.rows || 10
    };
    this.request.getResume(data).then((json: Json) => {
      this.totalRecords = json.SignData;
      this.tblData = json.ListData;
    });
  }

  selectRow(row) {
    this.request.PersonID = row.KEY_ID;
    sessionStorage.setItem('psn_edit_sub_set_list_PersonID', row.KEY_ID);
    this.router.navigate(['subset-list'], { relativeTo: this.route });
  }

  loadCarsLazy(event: LazyLoadEvent) {
    if (this.selectedNode) {
      this.loadResumeData(event);
    }
  }

  nodeExpand(event?) {
    const parentid = event && event.node.data['ITEM_ID'];
    this.request.getUnitTree(parentid).then((json: Json) => {
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
    this.loadPClasstbl();
    this.loadAscriptionData();
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
