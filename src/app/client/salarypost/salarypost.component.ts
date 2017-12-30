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
}
