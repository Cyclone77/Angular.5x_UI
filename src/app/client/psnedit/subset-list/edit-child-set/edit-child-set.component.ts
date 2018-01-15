import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubsetListService } from '../subset-list.service';
import { Json } from '../../../../classes/json';

@Component({
  selector: 'app-edit-child-set',
  templateUrl: './edit-child-set.component.html',
  styleUrls: ['./edit-child-set.component.css']
})
export class EditChildSetComponent implements OnInit {

  validateForm: FormGroup;
  SetFields = [];
  selectSetField = [];
  setName = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private request: SubsetListService
  ) { }

  ngOnInit() {
    this.validateForm = new FormGroup({});
    if (!this.request.SelectSet) {
      this.router.navigate(['../'],  { relativeTo: this.route });
      return;
    }

    this.setName = this.request.SelectSet.SetName;
    this.loadSetField();
  }

  handle(path: string): void {
    switch (path) {
      case 'index':
        this.router.navigate(['../../'],  { relativeTo: this.route });
        break;
      case 'subset-list':
        this.router.navigate(['../'],  { relativeTo: this.route });
        break;
    }
  }

  loadSetField() {
    this.request.getSetTableField({ moduleId: this.request.SelectSet.ModuleID, setId: this.request.SelectSet.SetID }).then((json: Json) => {
      if (json.IsSucceed) {
        this.SetFields = json.ListData;
        this.forminit();
      }
    }, err => {});
  }

  forminit() {
    const data = {};
    const colFields = [];
    this.SetFields.forEach((item, index) => {
      if (!item['IsSystemField']) {
        data[item['ItemID']] = [''];
      }
    });
    this.selectSetField = this.SetFields;
    this.validateForm = this.formBuilder.group(data);
  }

}
