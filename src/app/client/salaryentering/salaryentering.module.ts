import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 公用组件

import { ComponentsModule } from './../../components/components.module';

// 具体页面组件
import { SalaryEnteringComponent } from './salaryEntering.component';

// primeng UI
import { TreeModule, DataTableModule } from 'primeng/primeng';

// UI 组件
import { ElModule } from 'element-angular';

const router: Routes = [
  { path: '', component: SalaryEnteringComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    TreeModule,
    ElModule.forRoot(),
    DataTableModule
  ],
  declarations: [
    SalaryEnteringComponent,
    // UdcontrolComponent
  ]
})
export class SalaryEnteringModule { }
