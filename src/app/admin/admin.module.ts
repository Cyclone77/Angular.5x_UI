import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// angular自带组件
import { CommonModule } from '@angular/common';

// Element UI依赖
import { ElModule } from 'element-angular';

// 布局组件
import { ComponentsModule } from './../components/components.module';
import { ComponentlayoutModule } from './../components/componentlayout.module';

// 功能组件
import { AdminComponent } from './admin.component';
import { GAjaxService } from '../services/g-ajax.service';
import { UserOption } from '../classes/user-login';
import { UserService } from '../services/user.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'module-manage',
        loadChildren: './module-manage/module-manage.module#ModuleManageModule'
      },
      {
        path: 'authorization',
        loadChildren: './authorization/authorization.module#AuthorizationModule'
      },
      {
        path: 'useraccount',
        loadChildren: './useraccount/useraccount.module#UseraccountModule'
      },
      {
        path: 'role',
        loadChildren: './role/role.module#RoleModule'
      },
      {
        path: 'unitdendrogram',
        loadChildren: './unitdendrogram/unitdendrogram.module#UnitdendrogramModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    // ElModule.forRoot(),
    ComponentsModule,
    ComponentlayoutModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    // MenuComponent,
    // HeaderComponent
    AdminComponent
  ],
  providers: [
    GAjaxService,
    UserOption,
    UserService
  ]
})
export class AdminModule { }
