import { Component, Inject, OnInit, forwardRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TreeModule, DataTableModule, TreeNode } from 'primeng/primeng';

import { UnitdendrogramService } from './../unitdendrogram.service';
import { Json } from '../../../classes/json';
import { HttpDataType } from '../../../classes/http-data-type';
import { EventBusService } from '../../../services/event-bus.service';

@Component({
  selector: 'app-unit-rename',
  templateUrl: './unit-rename.component.html',
  styleUrls: ['./unit-rename.component.css']
})
export class UnitRenameComponent implements OnInit {

  unitname = '机构更名';
  validateForm: FormGroup;
  selectNode: TreeNode;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder,
    private request: UnitdendrogramService,
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      UNIT_NAME: [''],
      UPDATE_DATE: ['']
    });
    this.selectNode = this.request.SelectNode;
    this.eventBus.on('SelectNode', (data) => {
      this.selectNode = data;
      this.loadInit();
    });
    this.loadInit();
  }

  loadInit() {
    if (this.selectNode) {
      this.unitname = this.selectNode.label;
    }
  }

}
