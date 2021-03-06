import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Json } from './../../../classes/json';
import { AuthorizationService } from './../authorization.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  validateForm: FormGroup;
  loading = false;
  saveText = '保存';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: AuthorizationService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      GROUP_NAME: [ '' ]
    });
    // console.log(this.request.SelectNode);
  }

  submit(): void {
    // console.log(this.validateForm.value);
    this.loading = true;
    this.saveText = '保存中……';
    this.validateForm.value['Parent'] = this.request.SelectNode.data;
    this.request.addModule(this.validateForm).then((json: Json) => {
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
