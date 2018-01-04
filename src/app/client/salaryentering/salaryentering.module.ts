import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 具体页面组件
import { SalaryenteringComponent } from './salaryentering.component';

const router: Routes = [
  { path: '', component: SalaryenteringComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    SalaryenteringComponent
  ]
})
export class SalaryenteringModule { }
