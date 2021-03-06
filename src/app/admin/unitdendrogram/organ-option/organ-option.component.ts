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
  styleUrls: ['./organ-option.component.css'],
  providers: [MessageService]
})
export class OrganOptionComponent implements OnInit {

  unitname = '机构信息';
  validateForm: FormGroup;
  selectNode: TreeNode;
  isAdd = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private request: UnitdendrogramService,
    private eventBus: EventBusService,
    private messageService: MessageService
  ) { }

  initB03() {
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

  ngOnInit() {
    this.initB03();
    this.selectNode = this.request.SelectNode;
    this.eventBus.on('SelectNode', (data) => {
      this.selectNode = data;
      this.initB03();
      this.loadB03Data();
    });

    this.loadB03Data();
  }

  loadB03Data() {
   if (this.selectNode) {
     this.unitname = this.selectNode.label;
   }
    const data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['UNIT_ID'] : '-1',
      DATA_ROW: 1,
      SetID: 'B03',
      ModuleId: 'M00002',
      Data: this.validateForm.value
    };
    this.request.getB03Data(data).then((json: Json) => {
      if (json.IsSucceed && !json.ListData) {
        this.isAdd = true;
      } else
      if (json.IsSucceed && json.ListData) {
        this.validateForm = this.formBuilder.group(json.ListData[0]);
        // this.validateForm.value = json.Data;
      }
    });
  }

  saveB03Data() {
    const data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['UNIT_ID'] : '',
      DATA_ROW: 1,
      SetID: 'B03',
      ModuleId: 'M00002',
      Data: this.validateForm.value
    };
    this.request.setB03Data(data, this.isAdd).then((json: Json) => {
      if (json.IsSucceed) {
        this.showMsg('保存成功！', 'success');
      } else {
        this.showMsg(json.Err, 'error');
      }
    }, err => {
      this.showMsg('保存数据时发生异常！', 'warn');
    });
  }

  showMsg(msg: string, type: string) {
    this.messageService.add({severity: type, summary: '系统消息', detail: msg });
  }
}
