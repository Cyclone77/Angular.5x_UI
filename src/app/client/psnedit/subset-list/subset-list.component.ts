import { Component, OnInit, forwardRef, Inject, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PsneditService } from '../psnedit.service';
import { SubsetListService } from './subset-list.service';
import { Json } from '../../../classes/json';

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
  providers: [
    SubsetListService
  ]
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

  selectSetField = [];

  validateForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: SubsetListService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setdata = this.setList[0];
    this.loadSetTable();

    this.loadSetTablField();
  }

  loadSetTable() {
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
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
        this.selectSetField = json.ListData;
        this.forminit();
      }
    }, err => {});
  }

  forminit() {
    const data = {};
    this.selectSetField.forEach((item, index) => {
      data[item['ItemID']] = [''];
    });
    this.validateForm = this.formBuilder.group(data);
  }

}
