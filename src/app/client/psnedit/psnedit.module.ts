import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PsneditComponent } from './psnedit.component';

import { ComponentsModule } from './../../components/components.module';
// primeng UI
// import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
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
    RouterModule.forChild(router),
    // AccordionModule,
    TreeModule
  ],
  declarations: [
    PsneditComponent,
    // ComponentsModule
  ]
})
export class PsneditModule { }
