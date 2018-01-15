import { Component, OnInit,Inject,forwardRef } from '@angular/core';
import { UnitdendrogramService } from '../unitdendrogram.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-legal-represet',
  templateUrl: './legal-represet.component.html',
  styleUrls: ['./legal-represet.component.css']
})
export class LegalRepresetComponent implements OnInit {
  legalRepreset = '法人\\负责人情况';
  oldLegalRepreset = '历任法人负责人';
  validateForm: FormGroup;

  constructor(
    private request: UnitdendrogramService,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    console.log(this.request.SelectNode);
    this.initB04();
  }
  initB04(){
    this.validateForm = this.formBuilder.group({
      B04A0101: [ '' ],
      B04A0107: [ '' ],
      B04Personaff: [ '' ],
      B04A0215A: [ '' ],
      B04AC805: [ '' ],
      B04A0288: [ '' ],
      DATA_ROW: [''],
      DISP_ORDER: [''],
      IS_DELETED: [''],
      IS_LAST_ROW: [''],
      KEY_ID: ['']
    });
  }
  changePerson(){

  }
  initB04Tbl(){
    
  }

}
