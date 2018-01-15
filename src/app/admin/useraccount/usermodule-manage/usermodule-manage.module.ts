import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms'

// 服务
import { GAjaxService } from './../../../services/g-ajax.service';
import { UsermoduleManageService} from './../usermodule-manage/usermodule-manage.service';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../../components/components.module';

// primeng UI
import {DataTableModule, SharedModule, TreeModule, TreeNode, GrowlModule} from 'primeng/primeng';


// 引入本模块组件
import { UserOption, UserLogin } from './../../../classes/user-login';
/* 账户管理 */
import { UsermoduleManageComponent } from './usermodule-manage.component';
// 添加账户
import { AddUsermoduleComponent } from './add/add.component';
// 修改账户
import { EditUsermoduleComponent } from './edit/edit.component';



const router: Routes = [
  { path: '', component: UsermoduleManageComponent },
  { path: 'add', component: AddUsermoduleComponent },
  { path: 'edit', component: EditUsermoduleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    ElModule.forRoot(),
    DataTableModule,
    TreeModule
  ],
  declarations: [
    UsermoduleManageComponent,
    AddUsermoduleComponent,
    EditUsermoduleComponent
  ],
  providers: [
    GAjaxService,
    UserOption,
    UserLogin,
    UsermoduleManageService
  ]
})
export class UsermoduleManageModule { }

