import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 公用组件
import { LrcontrolComponent } from './../../components/lrcontrol/lrcontrol.component';

// 具体页面
import { ModuleManageComponent } from './module-manage.component';

const router: Routes = [
  { path: '', component: ModuleManageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    ModuleManageComponent,
    // LrcontrolComponent
  ]
})
export class ModuleManageModule { }
