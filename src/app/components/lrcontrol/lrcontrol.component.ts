import { Component, OnInit, Input } from '@angular/core';
// import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-lrcontrol',
  templateUrl: './lrcontrol.component.html',
  styleUrls: ['./lrcontrol.component.css']
})
export class LrcontrolComponent implements OnInit {

  @Input() lrstyle: any;
  constructor() { }

  ngOnInit() {
  }

}
