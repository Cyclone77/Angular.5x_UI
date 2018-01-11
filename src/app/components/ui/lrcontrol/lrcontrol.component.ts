import { Component, OnInit, Input, ContentChild, TemplateRef  } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gl-lrcontrol',
  templateUrl: './lrcontrol.component.html',
  styleUrls: ['./lrcontrol.component.css']
})
export class LrcontrolComponent implements OnInit {

  @Input() leftwidth: number;
  @ContentChild('left') leftTmp: TemplateRef<any>;
  @ContentChild('right') rightTmp: TemplateRef<any>;
  constructor() {}

  ngOnInit() {
  }

}
