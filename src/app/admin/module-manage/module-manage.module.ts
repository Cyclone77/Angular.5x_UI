import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { UserOption } from './../../classes/user-login';

// 具体页面
import { ModuleManageComponent } from './module-manage.component';

const router: Routes = [
  { path: '', component: ModuleManageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(router),
    ElModule.forRoot()
  ],
  declarations: [
    ModuleManageComponent
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption
  ]
})
export class ModuleManageModule { }
