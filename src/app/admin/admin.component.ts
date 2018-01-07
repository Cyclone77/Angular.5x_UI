import { Component, OnInit } from '@angular/core';

import { MenuComponent } from './../layout/menu/menu.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  leftwidth = 260;

  constructor() { }

  ngOnInit() {
  }

}
