import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// 服务
import { GAjaxService } from './../../services/g-ajax.service';
import { UserService } from './../../services/user.service';

// 公用组件
import { ElModule } from 'element-angular';
import { ComponentsModule } from './../../components/components.module';

import { AuthorizationComponent } from './authorization.component';
import { AddComponent } from './add/add.component';
import { UserOption, UserLogin } from './../../classes/user-login';

const router: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    // FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    ElModule.forRoot()
  ],
  declarations: [
    AuthorizationComponent,
    AddComponent
  ],
  providers: [
    GAjaxService,
    UserService,
    UserOption,
    UserLogin
  ]
})
export class AuthorizationModule { }
