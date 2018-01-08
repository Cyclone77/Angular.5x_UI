import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-salarypost',
  templateUrl: './salarypost.component.html',
  styleUrls: ['./salarypost.component.css']
})

export class SalarypostComponent implements OnInit {

  @ContentChild('divTable') divTbl: ElementRef;

  moduleTitle = '薪级工资标准表';

  //表格的编辑模式
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
    {field: 'PostLevel', header: '岗级'},
    {field: 'Salary1', header: '1薪'},
    {field: 'Salary2', header: '2薪'},
    {field: 'Salary3', header: '3薪'},
    {field: 'Salary4', header: '4薪'},
    {field: 'Salary5', header: '5薪'},
    {field: 'Salary6', header: '6薪'},
    {field: 'Salary7', header: '7薪'},
    {field: 'Salary8', header: '8薪'},
    {field: 'Salary9', header: '9薪'},
];

  tableData: any[] = [{
    'PostLevel': '一岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '二岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '三岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '四岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '五岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '六岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '七岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '八岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }, {
    'PostLevel': '九岗',
    'Salary1': '2017-08-19',
    'Salary2': '上海',
    'Salary3': '上海',
    'Salary4': '上海',
    'Salary5': '上海',
    'Salary6': '上海',
    'Salary7': '上海',
    'Salary8': '上海',
    'Salary9': '上海'
  }];
  constructor() { }

  ngOnInit() {
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
