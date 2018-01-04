import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// UI 组件
import { ElModule } from 'element-angular';

// 公用组件
import { HeadlineComponent } from './../../components/headline/headline.component';

// 具体页面组件
import { SalarypostComponent } from './salarypost.component';

const router: Routes = [
  { path: '', component: SalarypostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    SalarypostComponent,
    HeadlineComponent
  ]
})
export class SalarypostModule { }
