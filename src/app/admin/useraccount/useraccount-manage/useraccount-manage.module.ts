import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms'

// 服务
import { GAjaxService } from './../../../services/g-ajax.service';
import { UserService } from './../../../services/user.service';
import { UseraccountManageService } from './../useraccount-manage/useraccount-manage.service';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../../components/components.module';

// primeng UI
import { AccordionModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';

// 引入本模块组件
import { UserOption, UserLogin } from './../../../classes/user-login';

/* 账户管理 */
import { UseraccountManageComponent } from './useraccount-manage.component';
// 添加账户
import { AddUseraccountComponent } from './add/add.component';
// 修改账户
import { EditUseraccountComponent } from './edit/edit.component';



const router: Routes = [
  { path: '', component: UseraccountManageComponent },
  { path: 'add', component: AddUseraccountComponent },
  { path: 'edit', component: EditUseraccountComponent }
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
    UseraccountManageComponent,
    AddUseraccountComponent,
    EditUseraccountComponent
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption,
    UserLogin,
    UseraccountManageService
  ]
})
export class UseraccountManageModule { }
