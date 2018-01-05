import { Component, OnInit, Input, ContentChild, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gl-udcontrol',
  templateUrl: './udcontrol.component.html',
  styleUrls: ['./udcontrol.component.css']
})
export class UdcontrolComponent implements OnInit {

  top: number;
  @Input() padding: number;

  @ContentChild('top') topTmp: ElementRef;
  @ContentChild('bottom') bottomTmp: ElementRef;

  @ViewChild('topEl') topEl: ElementRef;
  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if (this.topEl) {
      const el: HTMLElement = <HTMLElement>this.topEl.nativeElement;
      this.top = el.clientHeight + 14;
      this.cdr.detectChanges();
    }
  }

}
