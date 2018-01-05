import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

// 具体页面
import { ModuleManageComponent } from './module-manage.component';
import { AddComponent } from './add/add.component';

const router: Routes = [
  { path: '', component: ModuleManageComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot()
  ],
  declarations: [
    ModuleManageComponent,
    AddComponent
  ]
})
export class ModuleManageModule { }
