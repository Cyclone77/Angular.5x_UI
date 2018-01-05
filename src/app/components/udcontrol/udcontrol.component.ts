import { Component, OnInit, Input, ContentChild, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gl-udcontrol',
  templateUrl: './udcontrol.component.html',
  styleUrls: ['./udcontrol.component.css']
})
export class UdcontrolComponent implements OnInit {

  @Input() padding: number;

  @ContentChild('top') topTmp: ElementRef;
  @ContentChild('bottom') bottomTmp: ElementRef;

  @ViewChild('topEl') topEl: ElementRef;
  top: number;
  constructor() {
  }

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if (this.topEl) {
      const el: HTMLElement = <HTMLElement>this.topEl.nativeElement;
      // const  salarEl = el.querySelector('.gl-salarcore');
      console.log(el);
      this.top = <number>el.clientHeight + 14;
    }
  }

}
