import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms'


import { Json } from './../../../../classes/json';
import { UseraccountManageService } from './../useraccount-manage.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

// primeng UI
import { ElModule } from 'element-angular';
import {GrowlModule} from 'primeng/primeng';

type validateResult = {
    status: string,
    message?: string,
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService]
})
export class AddUseraccountComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  showPolicy = false;
  that = this;
  saveText = '保存';
  Succ = 'success';
  Err = 'error';
  Warn = 'warn';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UseraccountManageService,
    private messageService: MessageService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  reset(): void {
    this.validateForm.reset();
  }
  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item];
  }
  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : '';
  }
  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) { return; }
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : '';
  }
  private passwordValidator = (control: FormControl): validateResult => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    if (!!control.parent) {
      const onepwd = control.parent.get('PASSWORD1');
      if (onepwd) {
        if (!!onepwd && onepwd.value !== control.value) {
            return { status: 'error', message: '两次密码不一致' };
        }
      }
    }
    return { status: 'success' };
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      PASSWORD: [ '', [this.passwordValidator] ],
      IS_ADMIN: [ '0' ],
      USER_NAME: [ '' ],
      USER_ACCOUNT: [''],
      GROUP_ID: ['']
    });
    // this.showPolicy = this.validateForm.value['IS_ADMIN'] == '0'?true:false;
  }

  submit(): void {
    this.loading = true;
    this.saveText = '保存中……';
    this.validateForm.value['GROUP_ID'] = this.request.SelectNode.data;
    console.log(this.validateForm.value);
    this.request.mod_insert(this.validateForm).then((json: Json) => {
      if (json.IsSucceed) {
        this.router.navigate(['../'],  { relativeTo: this.route });
      } else {
        this.showMsg(json.Err, this.Warn);
        this.loading = false;
        this.saveText = '保存';
      }
    },
    err => {
      this.showMsg(err, this.Err);
      console.log(err);
    });
  }

  chanageUserType(): void {
  }

  showMsg(msg: string, type: string) {
    this.messageService.add({severity: type, summary: '系统消息', detail: msg });
  }
}
