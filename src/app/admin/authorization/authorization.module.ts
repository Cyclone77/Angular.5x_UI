import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

import { AuthorizationComponent } from './authorization.component';

const router: Routes = [
  { path: '', component: AuthorizationComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot()
  ],
  declarations: [AuthorizationComponent]
})
export class AuthorizationModule { }
