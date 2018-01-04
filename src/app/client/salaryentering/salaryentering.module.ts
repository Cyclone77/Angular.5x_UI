import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 公用组件

import { ComponentsModule } from './../../components/components.module';

// 具体页面组件
import { SalaryenteringComponent } from './salaryentering.component';

const router: Routes = [
  { path: '', component: SalaryenteringComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    SalaryenteringComponent,
    // UdcontrolComponent
  ]
})
export class SalaryenteringModule { }
