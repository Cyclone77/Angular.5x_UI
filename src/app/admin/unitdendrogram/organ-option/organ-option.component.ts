import { Component, Inject, OnInit, forwardRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TreeNode } from 'primeng/primeng';

import { UnitdendrogramService } from './../unitdendrogram.service';
import { Json } from '../../../classes/json';
import { HttpDataType } from '../../../classes/http-data-type';

@Component({
  selector: 'app-organ-option',
  templateUrl: './organ-option.component.html',
  styleUrls: ['./organ-option.component.css']
})
export class OrganOptionComponent implements OnInit {

  validateForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private request: UnitdendrogramService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      B0301: [ '' ],
      B0302: [ '' ],
      B0303: [ '' ],
      B0304: [ '' ],
      B0305: [ '' ],
      B0306: [ '' ],
      B0307: [ '' ],
      B0308: [ '' ],
      B0309: [ '' ],
      B0310: [ '' ],
      B0311: [ '' ],
      B0312: [ '' ],
      B0313: [ '' ],
      B0314: [ '' ],
      B0315: [ '' ],
      B0316: [ '' ],
      B03END_DATE: [''],
      B03START_DATE: [''],
      DATA_ROW: [''],
      DISP_ORDER: [''],
      IS_DELETED: [''],
      IS_LAST_ROW: [''],
      KEY_ID: ['']
    });

    this.loadB03Data();
  }

  loadB03Data() {
    const data: HttpDataType = {
      KEY_ID: this.request.SelectNode.data[''],
      DATA_ROW: 1,
      SetID: '',
      ModuleId: 'M00002'
    };
    this.request.getB03Data(data).then((json: Json) => {

    });
  }
}
