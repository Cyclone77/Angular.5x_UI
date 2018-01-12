import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Json } from './../../../classes/json';
import { PolicyService } from './../policy.service';

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
    private request: PolicyService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      POLICY_NAME: [ '' ],
      DESCRIPT: [ '' ]
    });
  }

  submit(): void {
    this.loading = true;
    this.saveText = '保存中……';
    this.validateForm.value['GROUP_ID'] = this.request.SelectNode.data;
    this.request.mod_insert (this.validateForm).then((json: Json) => {
      if (json.IsSucceed) {
        this.router.navigate(['../'],  { relativeTo: this.route });
      } else {
        this.loading = false;
        this.saveText = '保存';
      }
    }, err => {
      this.loading = false;
      this.saveText = '保存';
      console.log(err);
    });
  }
}

