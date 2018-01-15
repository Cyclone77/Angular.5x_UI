import { Component, OnInit, Inject, forwardRef, transition } from '@angular/core';
import { HttpDataType } from '../../../classes/http-data-type';
import { TreeNode, Header } from 'primeng/primeng';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UnitdendrogramService } from '../unitdendrogram.service';
import { fail } from 'assert';
import { Json } from '../../../classes/json';
import { MessageService } from 'primeng/components/common/messageservice';
import { EventBusService } from '../../../services/event-bus.service';


@Component({
  selector: 'app-intell-super',
  templateUrl: './intell-super.component.html',
  styleUrls: ['./intell-super.component.css'],
  providers: [MessageService]
})
export class IntellSuperComponent implements OnInit {

  unitName = '董事\监视情况';
  unitAlignName = '历任董事\监事';
  selectNode: TreeNode;
  validateForm: FormGroup;
  isAdd = false;
  // B11OperateTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  tblB11Data = [];
  items = [{
    field: 'B11A0101',
    header: '姓名',
    width: 20
  }, {
    field: 'B11A0107_CN',
    header: '性别',
    width: 10
  }, {
    field: 'B11Personaff_CN',
    header: '人员归属',
    width: 20
  }, {
    field: 'B11A0215A_CN',
    header: '职务',
    width: 40
  }, {
    field: 'B11AC805',
    header: '身份证号码',
    width: 50
  }, {
    field: 'B11A0288',
    header: '任现职时间',
    width: 50
  }
  , {
    field: 'B11OperateTime',
    header: '操作时间',
    width: 50
  }
  , {
    field: 'KeyID',
    header: '操作',
    width: 50
  }
  ];

  constructor(private request: UnitdendrogramService,
    private messageService: MessageService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private eventBus: EventBusService) { }

  initB11() {
    this.validateForm = this.formBuilder.group({
      B11A0101: [''],
      B11A0107: [''],
      B11Personaff: [''],
      B11AC805: [''],
      B11A0288: [''],
      B11OperateTime: [''],
      B11A0215A: [''],
      DATA_ROW: [''],
      DISP_ORDER: [''],
      IS_DELETED: [''],
      IS_LAST_ROW: [''],
      KEY_ID: ['']
    });
  }



  ngOnInit() {
    this.initB11();
    this.selectNode = this.request.SelectNode;
    this.eventBus.on('SelectNode', (data) => {
      this.selectNode = data;
      this.initB11();
      this.loadB11Data();
    });
    this.loadB11Data();
  }

  loadB11Data() {
    if (this.selectNode) {
      this.unitName = this.selectNode.label;
    }
    const data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['UNIT_ID'] : '-1',
      DATA_ROW: 1,
      SetID: 'B11',
      ModuleId: 'M00002',
      Data: this.validateForm.value
    };
    this.request.getB11Data(data).then((json: Json) => {
      if (json.IsSucceed && json.ListData.length === 0) {
        this.isAdd = true;
      } else {
        if (json.IsSucceed && json.ListData) {
          this.validateForm = this.formBuilder.group(json.ListData[0]);
          this.tblB11Data = json.ListData;
          // this.validateForm.value = json.Data;
        }
      }
    });
  }


  saveB11Data() {
    if (!this.selectNode) {
      return this.showMsg('请选择机构数！', 'error');
    }
    if (this.selectNode.data['UNIT_ID'] === -1) {
      return this.showMsg('请选择实体机构！', 'error');
    }
    const data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['UNIT_ID'] : '',
      DATA_ROW: 1,
      SetID: 'B11',
      ModuleId: 'M00002',
      Data: this.validateForm.value
    };
    // this.verifyData();
    this.request.getB11Data(data).then((json: Json) => {
      if (json.IsSucceed) {
        this.isAdd = json.ListData.length > 0 ? false : true;
      } else {
        this.showMsg(json.Err, 'error');
      }
      // tslint:disable-next-line:no-shadowed-variable
      this.request.setB11Data(data, this.isAdd).then((json: Json) => {
        if (json.IsSucceed) {
          this.showMsg('保存成功！', 'success');
          this.loadB11Data();
        } else {
          this.showMsg(json.Err, 'error');
        }
      }, err => {
        this.showMsg('保存数据时发生异常！', 'warn');
      });
    }, err => {
      this.showMsg('保存数据时发生异常！', 'warn');
    });
  }

  showMsg(msg: string, type: string) {
    this.messageService.add({ severity: type, summary: '系统消息', detail: msg });
  }



  verifyData() {
    const data: HttpDataType = {
      KEY_ID: this.selectNode ? this.selectNode.data['UNIT_ID'] : '',
      DATA_ROW: 1,
      SetID: 'B11',
      ModuleId: 'M00002',
      Data: this.validateForm.value
    };
    this.request.getB11Data(data).then((json: Json) => {
      if (json.IsSucceed) {
        this.isAdd = json.ListData.length > 0 ? false : true;
      } else {
        this.showMsg(json.Err, 'error');
      }
    }, err => {
      this.showMsg('保存数据时发生异常！', 'warn');
    });
  }
}
