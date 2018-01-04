import { Component, OnInit, Input, ContentChild, TemplateRef  } from '@angular/core';
@Component({
  selector: 'app-lrcontrol',
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
