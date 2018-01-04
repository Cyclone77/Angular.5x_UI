import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gl-udcontrol',
  templateUrl: './udcontrol.component.html',
  styleUrls: ['./udcontrol.component.css']
})
export class UdcontrolComponent implements OnInit {

  @Input() padding: number;
  @Input() top: number;

  @ContentChild('top') topTmp: ElementRef;
  @ContentChild('bottom') bottomTmp: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
