import { Component, Inject, OnInit, forwardRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TreeNode } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

import { UnitdendrogramService } from './../unitdendrogram.service';
import { Json } from '../../../classes/json';
import { HttpDataType } from '../../../classes/http-data-type';

import { EventBusService } from './../../../services/event-bus.service';

@Component({
  selector: 'app-organ-option',
  templateUrl: './organ-option.component.html',
  styleUrls: ['./organ-option.component.css']
})
export class OrganOptionComponent implements OnInit {

  unitname = '未选择单位';
  validateForm: FormGroup;
  selectNode: TreeNode;
  isAdd = false;
  msgs: Message[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private request: UnitdendrogramService,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
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
    this.selectNode = this.request.SelectNode;
    this.eventBus.on('SelectNode', (data) => {
      this.selectNode = data;
      this.loadB03Data();
    });
    this.loadB03Data();
  }

  loadB03Data() {
   if (this.selectNode) {
     this.unitname = this.selectNode.label;
   }
    const data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['GROUP_ID'] : '',
      DATA_ROW: 1,
      SetID: 'B03',
      ModuleId: 'M00002',
      Data: this.validateForm.value,
      PageIndex: -1,
      PageSize: -1
    };
    this.request.getB03Data(data).then((json: Json) => {
      if (json.IsSucceed && !json.Data) {
        this.isAdd = true;
      } else
      if (json.IsSucceed && json.Data) {
        this.validateForm = this.formBuilder.group(json.Data);
        // this.validateForm.value = json.Data;
      }
    });
  }

  saveB03Data() {
    this.request.setB03Data(this.validateForm.value, this.isAdd).then((json: Json) => {
      if (json.IsSucceed) {
        this.showMsg('保存成功！');
      } else {
        this.showMsg('保存失败！');
      }
    }, err => {
      this.showMsg('保存数据时发生异常！');
    });
  }

  showMsg(msg: string) {
    this.msgs.push({severity: 'error', summary: '系统消息', detail: msg });
  }
}
