import { Component, OnInit, ContentChild } from '@angular/core';
import { GAjaxService } from './../../services/g-ajax.service';
import { Json } from '../../classes/json';
import { Message } from 'primeng/components/common/api';
import { SalaryPostService } from './salaryPost.service';

@Component({
  selector: 'app-salarypost',
  templateUrl: './salarypost.component.html',
  styleUrls: ['./salarypost.component.css']
})

export class SalaryPostComponent implements OnInit {

  //@ContentChild('divTable') divTbl: ElementRef;

  // 常量
  moduleTitle = '薪级工资标准表';

  // 请求地址
  //getColUrl = '/api/Core/CodeItem/Select?moduleId=M00001&codeId=SDXJ';
  //getDataUrl = '/api/M00001/Standard/SelectBy_Type';
  //updateUrl = '/api/M00001/Standard/UpdateBy_Salary';

  // 表格的编辑模式
  editMode = false;

  // 消息容器
  msgs: Message[] = [];

  // 是否显示等待
  loading = false;

  // 选择表格弹窗对象
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
    selectedTblName: '' // 选择的表名
  };

  // 表格列
  cols: any[]= [
    {field: 'POST_LEVEL_CN', header: '岗级'}
  ];

  // 表格数据
  tableData: any[] = [];
  constructor(
    private http: GAjaxService,
    private request: SalaryPostService
  ) { }

  ngOnInit() {
    this.request.getColData().then((json: Json) => {
      // tslint:disable-next-line:curly
      if (!json.IsSucceed) return alert(json.Err);
       for (let i = 0; i < json.ListData.length; i++) {
         let item = json.ListData[i];
         this.cols.push({field: 'SALARY' + item.ID, header: item.Name});
       }
       this.loadData();
    }, err => {
      console.log(err);
    });
    this.tblDlg.selectedTblName = this.tblDlg.datalist[0].name;
  }

  // 加载表格数据
  loadData() {
    this.loading = true;
    this.request.loadData(this.tblDlg.value).then((json: Json) => {
      this.loading = false;
      if (!json.IsSucceed) {
        return this.showError(json.Err);
      }
      this.tableData = json.ListData;
    }, err => {
      console.log(err);
    });
  }

  // 选择表格
  selectTable() {
    this.tblDlg.toggle = true;
  }

  // 关闭表格选择框
  closeTblDlg() {
    this.tblDlg.toggle = false;
  }

  // 使用表格
  useTable(tblname, value) {
    this.tblDlg.selectedTblName = tblname;
    this.tblDlg.toggle = false;
    if (this.tblDlg.value !== value) {
      this.tblDlg.value = value;
      this.loadData();
    }

  }

  // 输出表格
  downExcel() {
    //const $divEl: HTMLElement = <HTMLElement>this.divTbl.nativeElement;
  }

  // 改变编辑模式
  changeEditMode() {
    this.editMode = (!this.editMode);
  }

  // 编辑单元格
  editCell(event) {
    let value = event.data[event.column.field];
    if (!value) {
      return false;
    }
    let reg = new RegExp('^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$');
    if (!reg.test(value)) {
      return this.showError('保存的值必须为正值数字!');
    }
    this.updateField(event.data, event.column.field, value);
  }

  showSuccess(val) {
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: '系统提示', detail: val});
  }

  showError(val) {
    this.msgs = [];
    this.msgs.push({severity: 'error', summary: '系统提示', detail: val});
  }

  // 更新字段
  updateField(data, field: string, val: number) {
    let Data = {};
    Data[field] = val;
    this.request.updateField({
      KEY_ID: data.KEY_ID,
      DATA_ROW: data.DATA_ROW,
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
