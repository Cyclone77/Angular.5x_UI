import { Component, Inject, OnInit, forwardRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TreeModule, DataTableModule, TreeNode } from 'primeng/primeng';

import { UnitdendrogramService } from './../unitdendrogram.service';
import { Json } from '../../../classes/json';
import { HttpDataType } from '../../../classes/http-data-type';
import { EventBusService } from '../../../services/event-bus.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-unit-rename',
  templateUrl: './unit-rename.component.html',
  styleUrls: ['./unit-rename.component.css'],
  providers: [MessageService]
})
export class UnitRenameComponent implements OnInit {

  unitname = '机构更名';
  validateForm: FormGroup;
  selectNode: TreeNode;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private request: UnitdendrogramService,
    private eventBus: EventBusService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      UNIT_NAME: [''],
      UPDATE_DATE: ['']
    });
    this.selectNode = this.request.SelectNode;
    this.eventBus.on('SelectNode', (data) => {
      this.selectNode = data;
      this.loadInit();
    });
    this.loadInit();
  }

  loadInit() {
    if (this.selectNode) {
      this.unitname = this.selectNode.label;
      console.log(this.selectNode);
    }
  }
  changeUnitName(){
      let data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['UNIT_ID'] : '-1',
      DATA_ROW: 1,
      SetID: 'B01',
      ModuleId: 'M00002',
      Data: this.validateForm.value
    };
    this.request.changeUnitName(data).then(
      (json: Json) => {
        if (json.IsSucceed) {
          this.showMsg('保存成功！', 'success');
        } else {
          this.showMsg(json.Err, 'error');
        }
      }, err => {
        this.showMsg('保存数据时发生异常！', 'warn');
      }
    )
  }
  showMsg(msg: string, type: string) {
    this.messageService.add({severity: type, summary: '系统消息', detail: msg });
  }

}
