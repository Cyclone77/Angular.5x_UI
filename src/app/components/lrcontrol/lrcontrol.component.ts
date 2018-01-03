import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
@Component({
  selector: 'app-lrcontrol',
  templateUrl: './lrcontrol.component.html',
  styleUrls: ['./lrcontrol.component.css']
})
export class LrcontrolComponent implements OnInit {

  @Input() lrstyle: any;
  @ViewChild('left') left: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }

}
