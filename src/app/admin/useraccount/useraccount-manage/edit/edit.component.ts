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
  saveText = '保存';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UseraccountManageService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const data = {
      PASSWORD: [ '', [this.passwordValidator] ],
      PASSWORD1: [ '', [this.rptpasswordValidator] ],
      ISADMIN: [ 0 ],
      USER_NAME:[ '' ],
      USER_ACCOUNT:[''],
      GROUP_ID: ['']
    };

    Object.assign(data, this.request.SelectTblRow,{'PASSWORD':'@@@@@@','PASSWORD1':'@@@@@@'});
    this.validateForm = this.formBuilder.group(data);
    // console.log(this.request.SelectTblRow);
    if (!this.request.SelectTblRow) {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  reset(): void {
    this.validateForm.reset()
  }
  
  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item]
  }
  
  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }
  
  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  private passwordValidator = (control: FormControl): validateResult => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    return { status: 'success' }
  }
  rptstatusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }
  
  rptmessageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  private rptpasswordValidator = (control: FormControl): validateResult => {
    //that.validateForm.value
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    var onepwd = control.parent.get("PASSWORD");
    if(!!onepwd && onepwd.value != control.value){
        return { status: 'error', message: '两次密码不一致' };
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    return { status: 'success' }
  }



  submit(): void {
    // console.log(this.validateForm.value);
    this.loading = true;
    // this.saveText = '保存中……';
    this.request.updataUser(this.validateForm).then((json: Json) => {
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
