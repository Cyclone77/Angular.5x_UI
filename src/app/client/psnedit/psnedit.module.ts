import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PsneditComponent } from './psnedit.component';

import { LrcontrolComponent } from './../../components/lrcontrol/lrcontrol.component';

const router: Routes = [
  {
    path: '',
    component: PsneditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    PsneditComponent,
    LrcontrolComponent
  ]
})
export class PsneditModule { }
