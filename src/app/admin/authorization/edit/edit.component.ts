import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorizationService } from './../authorization.service';
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
    private request: AuthorizationService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const data = {
      GROUP_NAME: [ '' ]
    };
    Object.assign(data, this.request.SelectTblRow);
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

  submit(): void {
    // console.log(this.validateForm.value);
    this.loading = true;
    // this.saveText = '保存中……';
    this.request.updataModule(this.validateForm).then((json: Json) => {
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
