import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// UI 组件
import { ElModule } from 'element-angular';

// 公用组件
import { ComponentsModule } from './../../components/components.module';

// 具体页面组件
import { SalarypostComponent } from './salarypost.component';

import { DataTableModule, SharedModule } from 'primeng/primeng';

const router: Routes = [
  { path: '', component: SalarypostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    ComponentsModule,
    RouterModule.forChild(router),
    DataTableModule,
    SharedModule
  ],
  declarations: [
    SalarypostComponent,
    // HeadlineComponent,
    // ComponentsModule
  ]
})
export class SalarypostModule { }
