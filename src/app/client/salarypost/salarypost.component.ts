import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GAjaxService } from './../../services/g-ajax.service';
import { Json } from '../../classes/json';
import { Message } from 'primeng/components/common/api';
import { GrowlModule } from 'primeng/primeng';

@Component({
  selector: 'app-salarypost',
  templateUrl: './salarypost.component.html',
  styleUrls: ['./salarypost.component.css']
})

export class SalarypostComponent implements OnInit {

  @ContentChild('divTable') divTbl: ElementRef;

  moduleTitle = '薪级工资标准表';

  // 请求地址
  getColUrl = 'http://localhost:2261/api/Core/CodeItem_Select?moduleId=M00001&codeId=SDXJ';
  getDataUrl = 'http://localhost:2261/api/M00001/Standard_SelectBy_STANDARD_TYPE';
  updateUrl = 'http://localhost:2261/api/M00001/Standard_Update_Standard_Salary';

  // 表格的编辑模式
  editMode = false;

  msgs: Message[] = [];

  // 是否显示等待
  loading = false;
  tblDlg = {
    title: '标准表选择',
    toggle: false,
    value: '01',
    width: 500,
    datalist: [{
      name: '岗位薪点标准表(全民、大集体)',
      value: '01'
    }, {
      name: '岗位薪点标准表(自聘)',
      value: '02'
    }],
    selectedTblName: ''
  };

  cols: any[]= [
    {field: 'POST_LEVEL_CN', header: '岗级'}
];

  tableData: any[] = [];
  constructor(
    private http: GAjaxService
  ) { }

  ngOnInit() {
    this.http.get(this.getColUrl).then((json: Json) => {
      // tslint:disable-next-line:curly
      if (!json.IsSucceed) return alert(json.Err);
       for (let i = 0; i < json.ListData.length; i++) {
         const item = json.ListData[i];
         this.cols.push({field: 'SALARY' + item.ID, header: item.Name});
       }
       this.loadData();
    }, err => {
      console.log(err);
    });
    this.tblDlg.selectedTblName = this.tblDlg.datalist[0].name;
  }

  loadData() {
    const _getDataUrl = this.getDataUrl + '?standardType=' + this.tblDlg.value;
    this.loading = true;
    this.http.get(_getDataUrl).then((json: Json) => {
      this.loading = false;
      if (!json.IsSucceed) return alert(json.Err);
      this.tableData = json.ListData;
    }, err => {
      console.log(err);
    });
  }

  selectTable() {
    this.tblDlg.toggle = true;
  }

  closeTblDlg() {
    this.tblDlg.toggle = false;
  }

  useTable(tblname, value) {
    this.tblDlg.selectedTblName = tblname;
    this.tblDlg.toggle = false;
    if (this.tblDlg.value !== value) {
      this.tblDlg.value = value;
      this.loadData();
    }

  }

  cellclick(scope) {
    console.dir(scope);
  }

  getFormatModel(index: number): any {
    return this.tableData[index];
  }

  downExcel() {
    const $divEl: HTMLElement = <HTMLElement>this.divTbl.nativeElement;
  }

  changeEditMode() {
    this.editMode = (!this.editMode);
  }

  editCell(event) {
    const value = event.data[event.column.field];
    if (!value) {
      return false;
    }
    const reg = new RegExp('^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$');
    if (!reg.test(value)) {
      return this.showError('保存的值必须为正值数字!');
    }
    this.updateField(event.data, event.column.field, value);
  }

  showSuccess(val) {
    this.msgs = [];
    this.msgs.push( {severity: 'success', summary: '系统提示', detail: val});
  }

  showError(val) {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: '系统提示', detail: val});
  }

  updateField(data, field: string, val: number) {
    const Data = {};
    Data[field] = val;
    this.http.post(this.updateUrl, {
      Key_ID: data.KEY_ID,
      Disp_Order: data.DISP_ORDER,
      SetID: 'STANDARD',
      Data: Data
    }).then((json: Json) => {
      // tslint:disable-next-line:curly
      if (!json.IsSucceed) return this.showError(json.Err);
      this.showSuccess('保存成功');
    }, err => {
      this.showError(err);
    });
  }
}
