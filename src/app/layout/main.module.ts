import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// angular自带组件
import { CommonModule } from '@angular/common';

// Element UI依赖
import { ElModule } from 'element-angular';

// 布局组件
import { MainComponent } from './main.component';

import { ComponentlayoutModule } from './../components/componentlayout.module';
import { GAjaxService } from '../services/g-ajax.service';
import { UserOption } from '../classes/user-login';

// 具体路由
// 1.如果把组件当作功能界面使用，（子路由）不能使用其他组件

const mainRoutes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  //   children: [
  //     { path: '', redirectTo: 'index', pathMatch: 'full' },
  //     { path: 'index', component: IndexComponent }
  //   ]
  // }
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        loadChildren: 'app/client/index/index.module#IndexModule'
      },
      {
        path: 'salaryEntering',
        loadChildren: 'app/client/salaryEntering/salaryEntering.module#SalaryEnteringModule'
      },
      {
        path: 'salaryPost',
        loadChildren: 'app/client/salaryPost/salaryPost.module#SalaryPostModule'
      },
      {
        path: 'psnedit',
        loadChildren: 'app/client/psnedit/psnedit.module#PsneditModule'
      },
      {
        path: 'module-manage',
        loadChildren: 'app/admin/module-manage/module-manage.module#ModuleManageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,

    CommonModule,

    ComponentlayoutModule,

    // ElModule.forRoot(),
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    // MenuComponent,
    // HeaderComponent,
    MainComponent,

    // HeadlineComponent,
    // LrcontrolComponent,
    // UdcontrolComponent
    // 具体组件
  ],
  providers: [
    UserOption,
    GAjaxService
  ]
})
export class MainModule { }
