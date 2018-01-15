import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PolicyService } from './../policy.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Json } from '../../../classes/json';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  validateForm: FormGroup;
  loading = false;
  saveText = '保存';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: PolicyService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (!this.request.SelectTblRow) {
      this.validateForm = this.formBuilder.group({
        POLICY_ID: [''],
        POLICY_NAME: [ '' ],
        DESCRIPT: [ '' ]
      });
      this.router.navigate(['../'],  { relativeTo: this.route });
    } else {
      this.validateForm = this.formBuilder.group({
        POLICY_ID: this.request.SelectTblRow['POLICY_ID'],
        GROUP_ID: this.request.SelectTblRow['GROUP_ID'],
        POLICY_NAME: this.request.SelectTblRow['POLICY_NAME'],
        DESCRIPT: this.request.SelectTblRow['DESCRIPT']
      });
    }
  }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  submit(): void {
    // console.log(this.validateForm.value);
    // this.loading = true;
    // this.saveText = '保存中……';
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

