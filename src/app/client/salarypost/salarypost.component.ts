import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GAjaxService } from './../../services/g-ajax.service';
import { Json } from '../../classes/json';

@Component({
  selector: 'app-salarypost',
  templateUrl: './salarypost.component.html',
  styleUrls: ['./salarypost.component.css']
})

export class SalarypostComponent implements OnInit {

  @ContentChild('divTable') divTbl: ElementRef;

  moduleTitle = '薪级工资标准表';

  // 请求地址
  url = 'http://192.168.0.50:8080/api/Core/CodeItem_Select?modelId=M00001&codeId=SDXJ';

  // 表格的编辑模式
  editMode = false;
  tblDlg = {
    title: '标准表选择',
    toggle: false,
    width: 500,
    datalist: [{
      name: '岗位薪点标准表(全民、大集体)'
    }, {
      name: '岗位薪点标准表(自聘)'
    }],
    selectedTblName: ''
  };

  cols: any[]= [
    {field: 'PostLevel', header: '岗级'}
];

  tableData: any[] = [{
    'PostLevel': '一岗',
    'SALARY01': '2',
    'SALARY02': '3',
    'SALARY03': '4',
    'SALARY04': '5',
    'SALARY05': '6',
    'SALARY06': '7',
    'SALARY07': '8',
    'SALARY08': '9',
    'SALARY09': '0'
  }, {
    'PostLevel': '二岗',
    'SALARY01': '2',
    'SALARY02': '3',
    'SALARY03': '4',
    'SALARY04': '5',
    'SALARY05': '6',
    'SALARY06': '7',
    'SALARY07': '8',
    'SALARY08': '9',
    'SALARY09': '12'
  }, {
    'PostLevel': '三岗',
    'SALARY01': '3',
    'SALARY02': '234',
    'SALARY03': '54',
    'SALARY04': '45634',
    'SALARY05': '345',
    'SALARY06': '789',
    'SALARY07': '23',
    'SALARY08': '4',
    'SALARY09': '6'
  }, {
    'PostLevel': '四岗',
    'SALARY01': '5467',
    'SALARY02': '465',
    'SALARY03': '上海',
    'SALARY04': '上海',
    'SALARY05': '上海',
    'SALARY06': '上海',
    'SALARY07': '上海',
    'SALARY08': '上海',
    'SALARY09': '上海'
  }, {
    'PostLevel': '五岗',
    'SALARY01': '2017-08-19',
    'SALARY02': '上海',
    'SALARY03': '上海',
    'SALARY04': '上海',
    'SALARY05': '上海',
    'SALARY06': '上海',
    'SALARY07': '上海',
    'SALARY08': '上海',
    'SALARY09': '上海'
  }, {
    'PostLevel': '六岗',
    'SALARY01': '2017-08-19',
    'SALARY02': '上海',
    'SALARY03': '上海',
    'SALARY04': '上海',
    'SALARY05': '上海',
    'SALARY06': '上海',
    'SALARY07': '上海',
    'SALARY08': '上海',
    'SALARY09': '上海'
  }, {
    'PostLevel': '七岗',
    'SALARY01': '2017-08-19',
    'SALARY02': '上海',
    'SALARY03': '上海',
    'SALARY04': '上海',
    'SALARY05': '上海',
    'SALARY06': '上海',
    'SALARY07': '上海',
    'SALARY08': '上海',
    'SALARY09': '上海'
  }, {
    'PostLevel': '八岗',
    'SALARY01': '2017-08-19',
    'SALARY02': '上海',
    'SALARY03': '上海',
    'SALARY04': '上海',
    'SALARY05': '上海',
    'SALARY06': '上海',
    'SALARY07': '上海',
    'SALARY08': '上海',
    'SALARY09': '上海'
  }, {
    'PostLevel': '九岗',
    'SALARY01': '2017-08-19',
    'SALARY02': '上海',
    'SALARY03': '上海',
    'SALARY04': '上海',
    'SALARY05': '上海',
    'SALARY06': '上海',
    'SALARY07': '上海',
    'SALARY08': '上海',
    'SALARY09': '上海'
  }];
  constructor(
    private http: GAjaxService
  ) { }

  ngOnInit() {
    this.http.get(this.url).then((json: Json) => {
      // tslint:disable-next-line:curly
      if (!json.IsSucceed) return alert(json.Err);
       for (let i = 0; i < json.ListData.length; i++) {
         const item = json.ListData[i];
         this.cols.push({field: 'SALARY' + item.ID, header: item.Name});
       }
    }, err => {
      console.log(err);
    });
    this.tblDlg.selectedTblName = this.tblDlg.datalist[0].name;
  }

  selectTable() {
    this.tblDlg.toggle = true;
  }

  closeTblDlg() {
    this.tblDlg.toggle = false;
  }

  useTable(tblname) {
    this.tblDlg.selectedTblName = tblname;
    this.tblDlg.toggle = false;
  }

  handle(scope) {
    console.log(this.getFormatModel(scope.index));
    console.dir(scope);
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
}
