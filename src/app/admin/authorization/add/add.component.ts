import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  validateForm: FormGroup;
  url = 'http://192.168.0.50:8080/api/Core/PolicyGroup_Insert';
  myHttpHead = Object.assign({
    'Content-Type': 'application/json'
  }, {
    Authorization: 'Bearer ' + sessionStorage.getItem('Authorization'),
    SessionID: sessionStorage.getItem('SessionID')
  });

  constructor(
    private router: Router,
    private http: HttpClient,
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
    this.http.post(this.url, this.validateForm.value, this.myHttpHead).subscribe(json => {
      if (json['IsSucceed']) {
      }
    });
  }
}
