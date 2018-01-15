import { Component, OnInit, forwardRef, Inject, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PsneditService } from '../psnedit.service';
import { SubsetListService } from './subset-list.service';
import { Json } from '../../../classes/json';
import { HttpDataType } from '../../../classes/http-data-type';

// 过滤系统字段
@Pipe({name: 'filtSysField'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    const exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}

@Component({
  selector: 'app-subset-list',
  templateUrl: './subset-list.component.html',
  styleUrls: ['./subset-list.component.css'],
})
export class SubsetListComponent implements OnInit {

  // 选中样式
  setdata: any;
  isMain = true;

  // 子集列表
  setList = [{
    SetID: 'A01',
    SetName: '人员信息子集',
    ModuleID: 'M00003',
    IsMain: true
  }, {
    SetID: 'A19',
    SetName: '简历信息子集',
    ModuleID: 'M00004',
  }, {
    SetID: 'A79',
    SetName: '家庭成员及社会关系',
    ModuleID: 'M00005',
  }];

  cols = [];
  selectSetField = [];
  SetFields = [];
  fieldsData: any;

  personData = {
    A0101: '',
    A0177: ''
  };

  validateForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: SubsetListService,
    private top_request: PsneditService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.selectSet(this.setList[0]);
    this.validateForm = new FormGroup({});
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['./client/psnedit']);
    }
  }

  selectSet(set) {
    this.setdata = set;
    this.isMain = set.IsMain === true;
    this.loadSetTablField();
  }

  loadSetTablField() {
    this.request.getSetTableField({ moduleId: this.setdata.ModuleID, setId: this.setdata.SetID }).then((json: Json) => {
      if (json.IsSucceed) {
        this.SetFields = json.ListData;
        this.loadFieldData();
      }
    }, err => {});
  }

  loadFieldData() {
    const personid = sessionStorage.getItem('psn_edit_sub_set_list_PersonID');
    if (!personid) { return; }
    const data = {
      KEY_ID: personid,
      DATA_ROW: 1,
      ModuleId: 'M00003',
      SetID: 'A01'
    } as HttpDataType;
    this.request.getPersonData(data).then((json: Json) => {
      if (json.IsSucceed && json.ListData.length > 0) {
        this.personData = this.fieldsData = json.ListData[0];
        this.forminit();
      }
    });
  }

  forminit() {
    const data = {};
    let number = 1;
    const colFields = [];
    this.SetFields.forEach((item, index) => {
      if (!item['IsSystemField']) {
        data[item['ItemID']] = item['CodeID'] ? this.fieldsData[`${item['ItemID']}_CN`] : this.fieldsData[item['ItemID']];
        if (number < 6) {
          colFields.push({
            field: item['CodeID'] ? `${item['ItemID']}_CN` : item['ItemID'],
            header: item['ItemName']
          });
        }
        number++;
      }
    });
    this.cols = colFields;
    // this.fields = data;
    this.selectSetField = this.SetFields;
    this.validateForm = this.formBuilder.group(data);
  }

  loadCarsLazy(event) {

  }

  addSetChild() {
    this.request.SelectSet = this.setdata;
    this.router.navigate(['edit-child-set'], { relativeTo: this.route });
  }

  // 获取代码项
  getCodeOptions(field) {
    return [];
  }

  changeHandle(event, field) {
    this.request.getCodeItemData({
      moduleId: 'M00003',
      codeId: field.CodeID
    }).then((json: Json) => {
      if (json.IsSucceed) {
        return json.ListData;
      }
    });
  }
}
