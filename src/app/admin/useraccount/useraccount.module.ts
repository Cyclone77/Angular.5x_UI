import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';
import { UseraccountManageService } from './useraccount-manage/useraccount-manage.service';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

// primeng UI
import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';

// 引入本模块组件
import { UseraccountComponent } from './useraccount.component';
// import { AddComponent } from './add/add.component';
import { UserOption, UserLogin } from './../../classes/user-login';

/* 账户管理 */
import { UseraccountManageComponent } from './useraccount-manage/useraccount-manage.component';
// 添加账户
import { AddUseraccountComponent } from './useraccount-manage/add/add.component';
// 修改账户
import { EditUseraccountComponent } from './useraccount-manage/edit/edit.component';

/* 账户模块管理 */
import { UsermoduleManageComponent } from './usermodule-manage/usermodule-manage.component';


const router: Routes = [
  { path: '', component: UseraccountComponent },
  {
    path: 'useraccount-manage',
    loadChildren: './useraccount-manage/useraccount-manage.module#UseraccountManageModule'
  },
  {
    path: 'usermodule-manage',
    loadChildren: './usermodule-manage/usermodule-manage.module#UsermoduleManageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    // FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    AccordionModule,
    TreeModule
  ],
  declarations: [
    UseraccountComponent
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption,
    UserLogin,
    UseraccountManageService
  ]
})
export class UseraccountModule { }
