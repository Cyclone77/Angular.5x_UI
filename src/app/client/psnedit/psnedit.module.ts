import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PsneditComponent } from './psnedit.component';

import { ComponentsModule } from './../../components/components.module';

const router: Routes = [
  {
    path: '',
    component: PsneditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    PsneditComponent,
    // ComponentsModule
  ]
})
export class PsneditModule { }
