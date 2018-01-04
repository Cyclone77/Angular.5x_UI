import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// angular自带组件
import { CommonModule } from '@angular/common';

// Element UI依赖
import { ElModule } from 'element-angular';

// 布局组件
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

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
        path: 'salaryentering',
        loadChildren: 'app/client/salaryentering/salaryentering.module#SalaryenteringModule'
      },
      {
        path: 'salarypost',
        loadChildren: 'app/client/salarypost/salarypost.module#SalarypostModule'
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
    ElModule.forRoot(),
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
    MainComponent,

    // UdcontrolComponent,
    // 具体组件
  ]
})
export class MainModule { }
