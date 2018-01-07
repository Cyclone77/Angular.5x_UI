import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// angular自带组件
import { CommonModule } from '@angular/common';

// Element UI依赖
// import { ElModule } from 'element-angular';

// 布局组件
import { ComponentsModule } from './../components/components.module';
import { ComponentlayoutModule } from './../components/componentlayout.module';

// 功能组件
import { AdminComponent } from './admin.component';

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
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'role',
        loadChildren: './role/role.module#RoleModule'
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
  ]
})
export class AdminModule { }
