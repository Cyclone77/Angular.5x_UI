import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 加载UI组件
import { ElModule } from 'element-angular';

import { ModuleManageComponent } from './module-manage/module-manage.component';

// 加载布局组件
import { LrcontrolComponent } from './../components/lrcontrol/lrcontrol.component';
import { UdcontrolComponent } from './../components/udcontrol/udcontrol.component';

const backRoutes: Routes = [
  {
    path: 'modulemanage', component: ModuleManageComponent
  }
];

@NgModule({
  imports: [
    ElModule.forRoot(),
    RouterModule.forChild(backRoutes)
  ],
  declarations: [
    ModuleManageComponent,
    // LrcontrolComponent,
    // UdcontrolComponent
  ]
})
export class BackstageModule { }
