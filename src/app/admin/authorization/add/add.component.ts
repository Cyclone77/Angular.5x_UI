import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators } from '@angular/forms';

import { GAjaxService } from './../../../services/g-ajax.service';
import { Json } from './../../../classes/json';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  validateForm: FormGroup;
  url = 'http://localhost:2261/api/Core/PolicyGroup_Insert';

  constructor(
    private router: Router,
    private http: GAjaxService,
    private route: ActivatedRoute,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  handle(path: string): void {
    if (path === 'index') {
      this.router.navigate(['../'],  { relativeTo: this.route });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      GroupName: [ '' ],
      Parent: [ '' ],
    });
  }

  submit(): void {
    // console.log(this.validateForm.value);
    this.http.post(this.url, this.validateForm.value, (json: Json) => {
      if (json.IsSucceed) {
      }
    });
  }
}
