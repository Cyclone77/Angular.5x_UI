import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salarypost',
  templateUrl: './salarypost.component.html',
  styleUrls: ['./salarypost.component.css']
})
export class SalarypostComponent implements OnInit {

  moduleTitle = '镶边表';
  tblDlg = {
    title: '标准表选择',
    toggle: false,
    datalist: [{
      name: '岗位薪点标准表(全民、大集体)'
    }, {
      name: '岗位薪点标准表(自聘)'
    }],
    selectedTblName: ''
  };

  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷2',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷3',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷4',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
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
}
