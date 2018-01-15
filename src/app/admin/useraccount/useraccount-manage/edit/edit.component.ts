import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms'


import { Json } from './../../../../classes/json';
import { UseraccountManageService } from './../useraccount-manage.service';

// primeng UI
import { ElModule } from 'element-angular';
import {PasswordModule} from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

type validateResult = {
    status: string,
    message?: string,
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUseraccountComponent implements OnInit {

  validateForm: FormGroup;
  loading = false;
  showPolicy = true;
  saveText = '保存';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UseraccountManageService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const data: any = {
      PASSWORD: [ '@@@@@@', [this.passwordValidator] ],
      IS_ADMIN: [ '0' ],
      USER_NAME: [ '' ],
      USER_ACCOUNT: [''],
      GROUP_ID: ['']
    };
    if (this.request.SelectTblRow) {
      data['USERID'] = this.request.SelectTblRow['USERID'];
      data['IS_ADMIN'] = this.request.SelectTblRow['IS_ADMIN'] ? '1' : '0';
      data['USER_NAME'] = this.request.SelectTblRow['USER_NAME'];
      data['USER_ACCOUNT'] = this.request.SelectTblRow['USER_ACCOUNT'];
      data['GROUP_ID'] = this.request.SelectTblRow['GROUP_ID'];
    }  else {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
    this.validateForm = this.formBuilder.group(data);
    // this.showPolicy = this.validateForm.value['IS_ADMIN'] == '0'?true:false;
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }
  //#region 标准密码的处理
  reset(): void {
    this.validateForm.reset()
  }
  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item];
  }
  statusCtrl(item: string): string {
    if (!this.ctrl(item)) { return; }
    const control: AbstractControl = this.ctrl(item);
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }
  messageCtrl(item: string): string {
    if (!this.ctrl(item)) { return; }
    const control: AbstractControl = this.ctrl(item);
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  private passwordValidator = (control: FormControl): validateResult => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    const ctrol =  control.parent && control.parent.get('PASSWORD1');
    if (ctrol && ctrol.value !== control.value) {
      return { status: 'error', message: '两次密码不一致' };
    }
    // this.statusCtrl('PASSWORD1');
    return { status: 'success' };
  }
  //#endregion
  submit(): void {
    // console.log(this.validateForm.value);
    this.loading = true;
    this.saveText = '保存中……';
    this.request.mod_update(this.validateForm).then((json: Json) => {
      if (json.IsSucceed) {
        this.router.navigate(['../'],  { relativeTo: this.route });
      } else {
        this.loading = false;
        this.saveText = '保存';
      }
    }, err => {
      console.log(err);
    });
  }
}
